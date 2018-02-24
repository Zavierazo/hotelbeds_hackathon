package com.hackathon.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import se.walkercrou.places.GooglePlaces;
import se.walkercrou.places.Param;
import se.walkercrou.places.Place;

import java.util.List;

@Service
@Slf4j
public class GooglePlacesApiService {


    private static final GooglePlaces client = new GooglePlaces("******");

    public void test() {
        //BQ Apolo Hotel ChIJaxZDBaeWlxIRSuule-g8z1A
        Place place = client.getPlaceById("ChIJaxZDBaeWlxIRSuule-g8z1A");
    place.getPhotos();
    place.getReviews();
        log.info("Info {}" ,place);
    }
}
