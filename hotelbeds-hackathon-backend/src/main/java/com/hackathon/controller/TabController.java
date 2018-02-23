package com.hackathon.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hotelbeds.tab.sdk.client.TabActivitiesClient;
import com.hotelbeds.tab.sdk.client.base.exception.HttpClientException;
import com.hotelbeds.tab.sdk.model.domain.ActivityFilterType;
import com.hotelbeds.tab.sdk.model.pojo.Activity;
import com.hotelbeds.tab.sdk.model.pojo.ActivitySearchFilterItem;
import com.hotelbeds.tab.sdk.model.pojo.ActivitySearchFilterItemList;
import com.hotelbeds.tab.sdk.model.pojo.PaginationRequest;
import com.hotelbeds.tab.sdk.model.request.ActivitySearchRequest;
import com.hotelbeds.tab.sdk.model.response.ActivitySearchResponse;
import com.hotelbeds.tab.sdk.model.utils.Enum;

import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/tab")
@Slf4j
public class TabController {
    private static final String API_KEY = "ebqumrdzv6upzv6dsqsq5nt9";
    private static final String SECRET = "gTD6ZAMYvK";

    private TabActivitiesClient tabActivitiesClient;

    @PostConstruct
    public void init() {
        tabActivitiesClient = new TabActivitiesClient(
            API_KEY, SECRET, 50, 120, Enum.TABEnvironment.TABEnvironmnetTest);
    }

    @CrossOrigin(origins = {"*"
    })
    @RequestMapping(method = RequestMethod.GET, value = "/avail", produces = {
        MediaType.APPLICATION_JSON_VALUE
    })
    @ResponseBody
    public List<Activity> availHotel(
        @RequestParam Double latitude,
        @RequestParam Double longitude,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate day) throws IOException, HttpClientException {
        ActivitySearchRequest searchActivitiesRequest = new ActivitySearchRequest();
        // Create a filter for the availability.
        ActivitySearchFilterItem destinationFilter = new ActivitySearchFilterItem();
        destinationFilter.setType(ActivityFilterType.COORDINATES_GPS);
        destinationFilter.setLatitude(BigDecimal.valueOf(latitude));
        destinationFilter.setLongitude(BigDecimal.valueOf(longitude));
        ActivitySearchFilterItemList filterList = new ActivitySearchFilterItemList();
        filterList.setSearchFilterItems(new ArrayList<>());
        filterList.getSearchFilterItems().add(destinationFilter);
        ArrayList<ActivitySearchFilterItemList> filters = new ArrayList<>();
        // Add the filter to the request.
        filters.add(filterList);
        searchActivitiesRequest.setFilters(filters);
        // Set the request dates.
        Date dayDate = Date.from(day.atStartOfDay(ZoneId.systemDefault()).toInstant());
        searchActivitiesRequest.setFrom(dayDate);
        searchActivitiesRequest.setTo(dayDate);
        PaginationRequest paginationRQ = new PaginationRequest();
        paginationRQ.setItemsPerPage(50);
        paginationRQ.setPage(1);
        searchActivitiesRequest.setPagination(paginationRQ);



        // Search Activities
        // Call the availability Operation.
        ActivitySearchResponse searchActivitiesResponse = tabActivitiesClient.searchActivities(searchActivitiesRequest);
        log.info("Searched activtity for the previous request, "
            + ((searchActivitiesResponse.getActivities() != null) ? searchActivitiesResponse.getActivities().size() : 0) + " activities recived");
        // Get the activity code of the first activity EXCURSION retrieved from
        // the availability operation.
        List<Activity> excursions = new ArrayList<>();
        if (searchActivitiesResponse != null && searchActivitiesResponse.getActivities() != null) {
            for (Activity activity : searchActivitiesResponse.getActivities()) {
                excursions.add(activity);
            }
        }
        return excursions;
    }
}
