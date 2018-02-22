package com.hackathon.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.net.URISyntaxException;
import java.security.GeneralSecurityException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.vision.v1.Vision;
import com.google.api.services.vision.v1.VisionScopes;
import com.google.api.services.vision.v1.model.AnnotateImageRequest;
import com.google.api.services.vision.v1.model.AnnotateImageResponse;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesRequest;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesResponse;
import com.google.api.services.vision.v1.model.EntityAnnotation;
import com.google.api.services.vision.v1.model.Feature;
import com.google.api.services.vision.v1.model.Image;
import com.google.common.collect.ImmutableList;
import com.hackathon.mapper.HotelImagesMapper;
import com.hackathon.model.HotelImagesEntity;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class GoogleVisionApiService {

    private static final String APPLICATION_NAME = "hotelbeds-hackat-1519164948420";
    private ExecutorService executorService = Executors.newFixedThreadPool(5);
    private Vision vision;
    @Autowired
    private HotelImagesMapper hotelImagesMapper;

    @PostConstruct
    public void postConstruct() throws GeneralSecurityException, IOException, URISyntaxException {
        File file = new File(getClass().getClassLoader().getResource("google.json").toURI());
        GoogleCredential credential = GoogleCredential.fromStream(new FileInputStream(file))
            .createScoped(VisionScopes.all());
        JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
        vision = new Vision.Builder(GoogleNetHttpTransport.newTrustedTransport(), jsonFactory, credential)
            .setApplicationName(APPLICATION_NAME).build();
    }

    public List<EntityAnnotation> findLocation(File file) throws IOException {
        try (RandomAccessFile f = new RandomAccessFile(file, "r")) {
            byte[] data = new byte[(int) f.length()];
            f.read(data);
            AnnotateImageRequest request = new AnnotateImageRequest().setImage(new Image().encodeContent(data))
                .setFeatures(ImmutableList.of(new Feature().setType("LANDMARK_DETECTION").setMaxResults(5)));
            Vision.Images.Annotate annotate = vision.images()
                .annotate(new BatchAnnotateImagesRequest().setRequests(ImmutableList.of(request)));
            // Due to a bug: requests to Vision API containing large images fail
            // when GZipped.
            // annotate.setDisableGZipContent(true);
            // [END construct_request]

            // [START parse_response]
            BatchAnnotateImagesResponse batchResponse = annotate.execute();
            return batchResponse.getResponses().get(0).getLandmarkAnnotations();
        }
    }

    public void initImage(HotelImagesEntity entity) {
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                try {
                    log.info("Retrieving tags for hotel {} imagePath '{}'.", entity.getHotelCode(), entity.getImagePath());
                    List<EntityAnnotation> annotations = getImageLabels(entity);
                    StringBuilder annotationString = new StringBuilder();
                    if (annotations != null) {
                        for (EntityAnnotation annotation : annotations) {
                            if (annotationString.length() > 0) {
                                annotationString.append("#");
                            }
                            annotationString.append(annotation.getDescription());
                            annotationString.append("$").append(annotation.getScore());
                            annotationString.append("$").append(annotation.getTopicality());
                        }
                    }
                    if (annotationString.length() == 0) {
                        annotationString.append("UNKNOWN");
                    }
                    entity.setTags(annotationString.toString());
                    hotelImagesMapper.update(entity);
                } catch (Exception e) {
                    log.error("Error when retrieve annotations for {}", entity, e);
                }
            }
        });
    }

    public List<EntityAnnotation> getImageLabels(HotelImagesEntity entity) throws IOException, URISyntaxException {
        File file = new File(getClass().getClassLoader().getResource("static/" + entity.getImagePath()).toURI());
        return getLabels(file);
    }

    public List<EntityAnnotation> getLabels(File file) throws IOException {
        try (RandomAccessFile f = new RandomAccessFile(file, "r")) {
            byte[] data = new byte[(int) f.length()];
            f.read(data);

            AnnotateImageRequest request = new AnnotateImageRequest().setImage(new Image().encodeContent(data))
                .setFeatures(ImmutableList.of(new Feature().setType("LABEL_DETECTION").setMaxResults(5),
                    new Feature().setType("LABEL_DETECTION").setMaxResults(5)));
            Vision.Images.Annotate annotate = vision.images()
                .annotate(new BatchAnnotateImagesRequest().setRequests(ImmutableList.of(request)));
            // Due to a bug: requests to Vision API containing large images fail
            // when GZipped.
            // annotate.setDisableGZipContent(true);
            // [END construct_request]

            // [START parse_response]
            BatchAnnotateImagesResponse batchResponse = annotate.execute();
            assert batchResponse.getResponses().size() == 1;
            AnnotateImageResponse response = batchResponse.getResponses().get(0);
            return response.getLabelAnnotations();
        }
    }
}
