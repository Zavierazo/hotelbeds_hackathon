package com.hackathon.controller;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hotelbeds.distribution.hotel_api_sdk.HotelApiClient;
import com.hotelbeds.distribution.hotel_api_sdk.helpers.AvailRoom;
import com.hotelbeds.distribution.hotel_api_sdk.helpers.Availability;
import com.hotelbeds.distribution.hotel_api_sdk.helpers.Booking;
import com.hotelbeds.distribution.hotel_api_sdk.helpers.ConfirmRoom;
import com.hotelbeds.distribution.hotel_api_sdk.helpers.LoggingRequestInterceptor;
import com.hotelbeds.distribution.hotel_api_sdk.helpers.RoomDetail;
import com.hotelbeds.hotelapimodel.auto.common.SimpleTypes;
import com.hotelbeds.hotelapimodel.auto.messages.AvailabilityRS;
import com.hotelbeds.hotelapimodel.auto.messages.BookingRS;
import com.hotelbeds.hotelapimodel.auto.model.CancellationPolicy;
import com.hotelbeds.hotelapimodel.auto.model.Hotel;
import com.hotelbeds.hotelapimodel.auto.model.Rate;
import com.hotelbeds.hotelapimodel.auto.model.Room;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.hackathon.model.RateKey;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/hotel")
@Slf4j
public class HotelApiController {
    private static final String API_KEY = "d3624pymknffmdkppzsnsjpd";
    private static final String SECRET = "RETs8Ydjvk";
    private Map<String, AvailData> cache = new HashMap<>();



    @Data
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    public static class AvailData {
        private Integer index;
        private String hotelName;
        private String image;
        private List<String> images;
        private String room;
        private String cancellationPolicies;
        private BigDecimal price;
        private String rateKey;
    }

    @CrossOrigin(origins = {"*"
    })
    @RequestMapping(method = RequestMethod.GET, value = "/avail", produces = {
        MediaType.APPLICATION_JSON_VALUE
    })
    @ResponseBody
    public List<AvailData> availHotel(
        @RequestParam Integer hotelCode,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut,
        @RequestParam Integer adults,
        @RequestParam Integer childrens,
        @RequestParam(required = false) String childrensAges) {
        List<AvailData> avail = new ArrayList<>();
        try (HotelApiClient apiClient = new HotelApiClient(API_KEY, SECRET)) {
            apiClient.setReadTimeout(40000);
            apiClient.init();
            AvailRoom.AvailRoomBuilder availRoom = AvailRoom.builder().adults(adults);
            if (childrens > 0) {
                availRoom.children(childrens);
                String[] childAges = childrensAges.split(",");
                for (int count = 0; count < childrens; count++) {
                    availRoom.childOf(Integer.parseInt(childAges[count]));
                }
            }
            Availability rq = Availability.builder()
                .language("ENG")
                .checkIn(checkIn)
                .checkOut(checkOut)
                .addRoom(availRoom)
                .includeHotel(hotelCode)
                .payed(Availability.Pay.AT_WEB)
                .build();
            log.debug("Requesting availability... {}", LoggingRequestInterceptor.writeJSON(rq.toAvailabilityRQ()));
            AvailabilityRS availabilityRS = apiClient.availability(rq);
            log.debug("AvailabilityRS: {}", LoggingRequestInterceptor.writeJSON(availabilityRS));
            int index = 0;
            com.hotelbeds.hotelcontentapi.auto.messages.Hotel hotelDetail = apiClient.getHotel(hotelCode, "ENG", false);
            if (availabilityRS != null && availabilityRS.getHotels() != null && availabilityRS.getHotels().getHotels() != null) {
                for (Hotel hotel : availabilityRS.getHotels().getHotels()) {
                    if (hotel.getRooms() != null) {
                        for (Room room : hotel.getRooms()) {
                            if (room.getRates() != null) {
                                for (Rate rate : room.getRates()) {
                                    if (rate.getRateType() == SimpleTypes.RateType.BOOKABLE) {
                                        BigDecimal price = rate.getSellingRate() != null ? rate.getSellingRate() : rate.getNet();
                                        AvailData availData = new AvailData();
                                        availData.setIndex(index++);
                                        availData.setHotelName(hotel.getName() + " " + hotel.getCategoryName());
                                        Optional<com.hotelbeds.hotelcontentapi.auto.messages.Image> image =
                                            hotelDetail.getImages().stream().filter(imageBean -> "GEN".equals(imageBean.getType().getCode()))
                                                .findAny();
                                        availData.setImage("http://photos.hotelbeds.com/giata/original/"
                                            + (image.isPresent() ? image.get().getPath() : hotelDetail.getImages().get(0).getPath()));
                                        availData.setImages(hotelDetail.getImages().stream()
                                            .map(imageDetail -> "http://photos.hotelbeds.com/giata/original/" + imageDetail.getPath()).collect(
                                                Collectors.toList()));
                                        availData.setPrice(price);
                                        availData.setRoom(room.getName() + " " + rate.getBoardName());
                                        String cancellationPolicies = "Free";
                                        if (rate.getCancellationPolicies() != null && !rate.getCancellationPolicies().isEmpty()) {
                                            CancellationPolicy cancellationPolicy = rate.getCancellationPolicies().get(0);
                                            LocalDateTime from =
                                                LocalDateTime.parse(cancellationPolicy.getFrom(), DateTimeFormatter.ISO_OFFSET_DATE_TIME);
                                            if (from.isBefore(LocalDateTime.now())) {
                                                cancellationPolicies = "Non Refundable " + cancellationPolicy.getAmount() + "€";
                                            } else {
                                                cancellationPolicies =
                                                    "Free since " + from + ". Then you have to pay " + cancellationPolicy.getAmount() + "€";
                                            }
                                        }
                                        availData.setCancellationPolicies(cancellationPolicies);
                                        availData.setRateKey(rate.getRateKey());
                                        avail.add(availData);
                                        cache.put(rate.getRateKey(), availData);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            log.error("Error doing availability", e);
        }
        return avail;
    }

    @Data
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    public static class BookingData extends AvailData {
        private String bookingId;
    }

    @CrossOrigin(origins = {"*"
    })
    @RequestMapping(method = RequestMethod.GET, value = "/book", produces = {
        MediaType.APPLICATION_JSON_VALUE
    })
    @ResponseBody
    public BookingData bookHotel(@RequestParam String rateKey, @RequestParam String holderName, @RequestParam String holderSurname) {
        AvailData availData = cache.get(rateKey);
        BookingData bookingData = new BookingData();
        bookingData.setHotelName(availData.getHotelName());
        bookingData.setCancellationPolicies(availData.getCancellationPolicies());
        bookingData.setImage(availData.getImage());
        bookingData.setImages(availData.getImages());
        bookingData.setRoom(availData.getRoom());
        try (HotelApiClient apiClient = new HotelApiClient(API_KEY, SECRET)) {
            apiClient.setReadTimeout(40000);
            apiClient.init();
            RateKey rateKeyBean = new RateKey(rateKey);
            ConfirmRoom.ConfirmRoomBuilder confirmRoom = ConfirmRoom.builder();
            for (int count = 0; count < rateKeyBean.getAdults(); count++) {
                confirmRoom.detailed(RoomDetail.GuestType.ADULT, 30, "Perico" + count, "Palotes", 1);
            }
            if (rateKeyBean.getChildrens() > 0) {
                for (int count = 0; count < rateKeyBean.getChildrenAges().size(); count++) {
                    confirmRoom.childOf(Integer.parseInt(rateKeyBean.getChildrenAges().get(count)));
                }
            }
            Booking.BookingBuilder bookingBuilder =
                Booking.builder().withHolder(holderName, holderSurname).clientReference("Team3").remark("***SDK***")
                    .addRoom(rateKey, confirmRoom);
            Booking bookingRQ = bookingBuilder.build();
            log.info("BookingRQ: {}", LoggingRequestInterceptor.writeJSON(bookingRQ.toBookingRQ()));
            BookingRS bookingRS = apiClient.confirm(bookingRQ);
            log.debug("BookingRS: {}", LoggingRequestInterceptor.writeJSON(bookingRS));
            com.hotelbeds.hotelapimodel.auto.model.Booking booking = bookingRS.getBooking();

            bookingData.setBookingId(booking.getReference());
        } catch (Exception e) {
            log.error("Error doing booking");
        }
        return bookingData;
    }

}
