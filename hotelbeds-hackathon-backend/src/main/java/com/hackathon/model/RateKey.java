package com.hackathon.model;

import java.time.LocalDate;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.hotelbeds.hotelapimodel.auto.common.SimpleTypes;
import com.hotelbeds.hotelapimodel.auto.common.SimpleTypes.PaymentType;
import com.hotelbeds.hotelapimodel.auto.util.AssignUtils;

import com.google.common.base.Splitter;
import lombok.Data;

/**
 * The Class RateKey.
 */
@Data
public class RateKey {

    private static final char ITEM_SEPARATOR = '|';
    private static final char CACHE_KEY_SEPARATOR = '@';
    private static final String IS_PACKAGING = "P";
    private String rateKeyCode;
    private String cacheKey;
    private String rateKeyInfo;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private PaymentType paymentType;
    private Short receptive;
    private Integer hotelCode;
    private String roomTypeCode;
    private String roomCharacteristicCode;
    private String roomBoardCode;
    private String contractName;
    private String rateName;
    private Short rooms;
    private Short adults;
    private Short childrens;
    private List<String> childrenAges;
    private Boolean packaging;

    public RateKey(String rateKeyCode) {
        if (StringUtils.isNotBlank(rateKeyCode)) {
            setRateKeyCode(rateKeyCode);
            int separatorIndex = rateKeyCode.lastIndexOf(CACHE_KEY_SEPARATOR);
            setRateKeyInfo(rateKeyCode.substring(0, separatorIndex));
            setCacheKey(rateKeyCode.substring(separatorIndex, rateKeyCode.length()));
            List<String> rateKeyInfoParts = Splitter.on(ITEM_SEPARATOR).splitToList(getRateKeyInfo());
            int idx = 0;
            String checkInString = rateKeyInfoParts.get(idx++);
            if (checkInString != null) {
                setCheckIn(AssignUtils.getLocalDate(checkInString));
            }
            String checkOutString = rateKeyInfoParts.get(idx++);
            if (checkOutString != null) {
                setCheckOut(AssignUtils.getLocalDate(checkOutString));
            }
            setPaymentType(PaymentType.getPaymentType(rateKeyInfoParts.get(idx++)));
            setReceptive(Short.valueOf(rateKeyInfoParts.get(idx++)));
            setHotelCode(Integer.valueOf(rateKeyInfoParts.get(idx++)));
            insertRoomCodeData(rateKeyInfoParts.get(idx++));
            setContractName(rateKeyInfoParts.get(idx++));
            setRoomBoardCode(rateKeyInfoParts.get(idx++));
            String rate = rateKeyInfoParts.get(idx++);
            if (StringUtils.isNotBlank(rate)) {
                setRateName(rate);
            }
            insertOccupancyData(rateKeyInfoParts.get(idx++));
            insertChildrenAges(rateKeyInfoParts.get(idx++));
            setPackaging(IS_PACKAGING.equals(rateKeyInfoParts.get(idx)) ? Boolean.TRUE : Boolean.FALSE);
        }
    }

    private final void insertRoomCodeData(String roomCode) {
        if (StringUtils.isNotBlank(roomCode)) {
            List<String> roomCodeParts = Splitter.on(SimpleTypes.ROOM_SEPARATOR).splitToList(roomCode);
            if (roomCodeParts.size() > 1) {
                setRoomTypeCode(roomCodeParts.get(SimpleTypes.INDEX_0));
                StringBuilder stringBuilderFeature = new StringBuilder();
                for (int count = SimpleTypes.INDEX_1; count < roomCodeParts.size(); count++) {
                    stringBuilderFeature = stringBuilderFeature.append(roomCodeParts.get(count));
                    int roomCodePartsSize = roomCodeParts.size() - 1;
                    if (count != roomCodePartsSize) {
                        stringBuilderFeature = stringBuilderFeature.append(SimpleTypes.ROOM_SEPARATOR);
                    }
                }
                setRoomCharacteristicCode(stringBuilderFeature.toString());
            }
        }
    }

    private void insertOccupancyData(String tempOccupancy) {
        if (StringUtils.isNotBlank(tempOccupancy)) {
            List<String> occupancyParts = Splitter.on(SimpleTypes.OCCUPANCY_SEPARATOR).splitToList(tempOccupancy);
            if (occupancyParts.size() == 3) {
                setRooms(Short.parseShort(occupancyParts.get(SimpleTypes.INDEX_0)));
                setAdults(Short.parseShort(occupancyParts.get(SimpleTypes.INDEX_1)));
                setChildrens(Short.parseShort(occupancyParts.get(SimpleTypes.INDEX_2)));
            }
        }
    }

    private void insertChildrenAges(String tempChildrenAges) {
        if (StringUtils.isNotBlank(tempChildrenAges)) {
            setChildrenAges(Splitter.on(SimpleTypes.AGES_RATEKEY_SEPARATOR).splitToList(tempChildrenAges));
        }
    }
}
