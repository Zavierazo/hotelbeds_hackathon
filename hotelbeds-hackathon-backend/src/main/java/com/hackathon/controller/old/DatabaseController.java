package com.hackathon.controller.old;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hackathon.mapper.HotelImagesMapper;
import com.hackathon.model.HotelImagesEntity;
import com.hackathon.service.GoogleVisionApiService;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/")
@Slf4j
public class DatabaseController {

    @Autowired
    private HotelImagesMapper hotelImagesMapper;
    @Autowired
    private GoogleVisionApiService googleVisionApiService;

    @RequestMapping(method = RequestMethod.GET, value = "/rename", produces = {
        MediaType.TEXT_PLAIN_VALUE
    })
    @ResponseBody
    public void rename() throws Exception {
        File mainDir = new File(getClass().getClassLoader().getResource("static/img/hotel").toURI());
        for (File hotelDir : mainDir.listFiles()) {
            if (hotelDir.isDirectory()) {
                for (File image : hotelDir.listFiles()) {
                    if (image.getName().indexOf(' ') != -1) {
                        File newFile = new File(image.getParent(), image.getName().replaceAll(" ", ""));
                        Files.move(image.toPath(), newFile.toPath());
                        log.info("Renamed {} to {}", image.toPath(), newFile.toPath());
                    }
                }
            }
        }
    }


    @RequestMapping(method = RequestMethod.GET, value = "/loadHotelImages", produces = {
        MediaType.TEXT_PLAIN_VALUE
    })
    @ResponseBody
    public String loadHotelImages() throws Exception {
        List<HotelImagesEntity> images = hotelImagesMapper.selectAll();
        List<HotelImagesEntity> foundedImages = new ArrayList<>();
        File mainDir = new File(getClass().getClassLoader().getResource("static/img/hotel").toURI());
        for (File hotelDir : mainDir.listFiles()) {
            if (hotelDir.isDirectory()) {
                for (File image : hotelDir.listFiles()) {
                    Long hotelCode = Long.parseLong(hotelDir.getName());
                    String imagePath = "img/hotel/" + hotelCode + "/" + image.getName();

                    Optional<HotelImagesEntity> found = images.stream()
                        .filter(hotel -> hotel.getHotelCode().equals(hotelCode))
                        .filter(hotel -> hotel.getImagePath().equals(imagePath))
                        .findAny();
                    HotelImagesEntity hotel;
                    if (!found.isPresent()) {
                        log.info(hotelCode + " " + imagePath);
                        hotel = new HotelImagesEntity(hotelCode, imagePath, null);
                        hotelImagesMapper.insert(hotel);
                    } else {
                        hotel = found.get();
                    }
                    foundedImages.add(hotel);
                    if (StringUtils.isEmpty(hotel.getTags())) {
                        googleVisionApiService.initImage(hotel);
                    }
                }
            }
        }
        for (HotelImagesEntity entity : images) {
            if (!foundedImages.contains(entity)) {
                log.info("Deleting entity {}", foundedImages);
                hotelImagesMapper.delete(entity);
            }
        }
        return "OK";
    }

}
