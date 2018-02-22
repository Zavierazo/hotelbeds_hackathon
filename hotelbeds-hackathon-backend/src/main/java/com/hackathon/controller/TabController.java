package com.hackathon.controller;

import java.io.IOException;
import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;

import javax.annotation.PostConstruct;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hotelbeds.tab.sdk.client.TabActivitiesClient;
import com.hotelbeds.tab.sdk.client.base.exception.HttpClientException;
import com.hotelbeds.tab.sdk.model.domain.ActivityFilterType;
import com.hotelbeds.tab.sdk.model.domain.ActivityType;
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
    private static final String API_KEY = "gcwj5a22b5rxk7zev8w82ykq";
    private static final String SECRET = "BJkwd8gj7y";

    private TabActivitiesClient tabActivitiesClient;

    @PostConstruct
    public void init() {
        tabActivitiesClient = new TabActivitiesClient(
            API_KEY, SECRET, 50,
            120, Enum.TABEnvironment.TABEnvironmnetTest);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/avail", produces = {
        MediaType.APPLICATION_JSON_VALUE
    })
    @ResponseBody
    public String availHotel(
        @RequestParam Integer hotelCode,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
        @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut,
        @RequestParam Integer adults,
        @RequestParam Integer childrens,
        @RequestParam(required = false) String childrensAges) throws IOException, HttpClientException {
        ActivitySearchRequest searchActivitiesRequest = new ActivitySearchRequest();

        // Create a filter for the availability.
        ActivitySearchFilterItem destinationFilter = new ActivitySearchFilterItem();
        destinationFilter.setType(ActivityFilterType.COORDINATES_GPS);
        destinationFilter.setType(ActivityFilterType.DESTINATION_ID);
        destinationFilter.setValue("PMI");
        ActivitySearchFilterItemList filterList = new ActivitySearchFilterItemList();
        filterList.setSearchFilterItems(new ArrayList<>());
        filterList.getSearchFilterItems().add(destinationFilter);


        ArrayList<ActivitySearchFilterItemList> filters = new ArrayList<>();
        // Add the filter to the request.
        filters.add(filterList);

        searchActivitiesRequest.setFilters(filters);
        // Set the request dates.
        searchActivitiesRequest.setFrom(Date.from(checkIn.atStartOfDay(ZoneId.systemDefault()).toInstant()));
        searchActivitiesRequest.setTo(Date.from(checkOut.atStartOfDay(ZoneId.systemDefault()).toInstant()));

        PaginationRequest paginationRQ = new PaginationRequest();
        paginationRQ.setItemsPerPage(50);
        paginationRQ.setPage(1);
        searchActivitiesRequest.setPagination(paginationRQ);



        // Search Activities
        // Call the availability Operation.
        ActivitySearchResponse searchActivitiesResponse = tabActivitiesClient.searchActivities(searchActivitiesRequest);
        System.out.println("Searched activtity for the previous request, "
            + ((searchActivitiesResponse.getActivities() != null) ? searchActivitiesResponse.getActivities().size() : 0) + " activities recived");
        // Get the activity code of the first activity EXCURSION retrieved from
        // the availability operation.
        Activity selectedActivity = null;
        Boolean found = false;

        for (Activity activity : searchActivitiesResponse.getActivities()) {
            if (activity.getType().equals(ActivityType.EXCURSION) && !found) {
                selectedActivity = activity;
                found = true;
            }
        }


        return "";
    }
}
