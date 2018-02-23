package com.hackathon.controller;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/schedule")
@Slf4j
public class ScheduleController {

    @Data
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    public static class ScheduleResponse {
        private String day;
        private String month;
        private List<DaySchedule> days = new ArrayList<>();
    }

    @Data
    public static class DaySchedule {
        private LocalDate day;
        private String title;
        private String description;
        private BigDecimal price;
    }

    @CrossOrigin(origins = {"*"
    })
    @RequestMapping(method = RequestMethod.GET, value = "/list", produces = {
        MediaType.APPLICATION_JSON_VALUE
    })
    @ResponseBody
    public ScheduleResponse list(
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut) {
        ScheduleResponse response = new ScheduleResponse();
        response.setDay(checkIn.getDayOfMonth() + "-" + checkOut.getDayOfMonth());
        response.setMonth(checkIn.getMonth().getDisplayName(TextStyle.FULL, Locale.ENGLISH) + ", " + checkIn.getYear());
        long days = ChronoUnit.DAYS.between(checkIn, checkOut);
        for (int day = 0; day < days; day++) {
            LocalDate currentDay = checkIn.plusDays(day);
            DaySchedule daySchedule = new DaySchedule();
            daySchedule.setDay(currentDay);
            switch (day) {
                case 0:
                    daySchedule.setTitle("Half Day Rice Barge Tour");
                    daySchedule
                        .setDescription("Enjoy a perfect lazy afternoon introduction to Bangkok. Enjoy a long tail boat ride along the small canals on the Thonburi side of the river where the local life still exists as it has for centuries. Later join the converted rice barge \"Wan Fah\" for a leisurely cruise back down the river with some soft drinks and fruit. En route you will have a grandstand river view of some of Bangkok's most famous sites: the Wat Arun (the beautiful ornate Temple of Dawn), the Grand Palace and the Royal Barges Museum.");
                    daySchedule.setPrice(BigDecimal.valueOf(26.04));
                    break;
                case 1:
                    daySchedule.setTitle("Evening Dinner Cruise With White Orchid Cruise");
                    daySchedule
                        .setDescription("Let yourself be seduced with this unforgettable dinner where you can choose between traditional Thai dishes or an international buffet. Try one of the cocktails prepared by our waiters or enjoy a fine wine from some of the world’s greatest producers. The excellent service offered by our highly–qualified and experienced team cannot be bettered and is complemented by live music by Thai and international artists. Come with us on this cruise and see the sights drift by as you enjoy a selection of Thai and Western food and listen to live music. The history of the city can be seen in all its glory on the banks of the River Chao Praya with numerous Buddhist temples, royal palaces, old docks alongside the colonial style buildings built by the first European residents and the more humble dwellings of the current residents.");
                    daySchedule.setPrice(BigDecimal.valueOf(31.86));
                    break;
                case 2:
                    daySchedule.setTitle("Evening Thai Boxing Match");
                    daySchedule
                        .setDescription("A ringside seat awaits you to see Thai boxing, the country’s national sport. Watch as the boxers engage in a battle of wits, using nearly every part of their body. This ruthless combat is called Muay Thai, ‘the art of eight limbs...");
                    daySchedule.setPrice(BigDecimal.valueOf(113.91));
                    break;
                case 3:
                    daySchedule.setTitle("Bangkok Temples");
                    daySchedule
                        .setDescription("Thailand is predominantly a Buddhist country with around 95% of Thai's practicing the Theravada discipline of Buddhism. Therefore on the streets of Bangkok it is not unusual to see monks walking along the road and it is no surpri...");
                    daySchedule.setPrice(BigDecimal.valueOf(28.05));
                    break;
                case 4:
                    daySchedule.setTitle("Muay Thai Live Show");
                    daySchedule
                        .setDescription("Bangkok's Thrilling New Stage Spectacular! Muay Thai Live: The Legend Lives tells the untold stories of the origins and heroes of Muay Thai, spanning 300 years, from the past to present day. Come face to face with Muay Thai’s gre...");
                    daySchedule.setPrice(BigDecimal.valueOf(22.7));
                    break;
                case 5:
                    daySchedule.setTitle("Full Day Bridge Over The River Kwai");
                    daySchedule
                        .setDescription("This tour takes you to the beautiful province of Kanchanaburi where you will take a trip back in history at the River Kwai and its famous bridge. You will visit the war cemetery and a reconstructed POW camp that now houses a muse...");
                    daySchedule.setPrice(BigDecimal.valueOf(51.25));
                    break;
            }
            response.getDays().add(daySchedule);
        }
        return response;
    }
}
