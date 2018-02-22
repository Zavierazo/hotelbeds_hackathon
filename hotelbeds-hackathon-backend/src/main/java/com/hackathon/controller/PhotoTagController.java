package com.hackathon.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.api.services.vision.v1.model.EntityAnnotation;
import com.hackathon.service.GoogleVisionApiService;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("/image")
@Slf4j
public class PhotoTagController {

    @Autowired
    private GoogleVisionApiService googleVisionApiService;

    @CrossOrigin(origins = {"*"
    })
    @RequestMapping(method = RequestMethod.POST, value = "/tag")
    @ResponseBody
    public List<String> label(@RequestParam("file") MultipartFile filePart) throws Exception {
        File file = new File(filePart.getOriginalFilename());
        try (BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(file))) {
            FileCopyUtils.copy(filePart.getInputStream(), stream);
        }
        List<EntityAnnotation> labels = googleVisionApiService.getLabels(file);
        return labels.stream().filter(label -> label.getScore() > 0.8).map(label -> label.getDescription()).collect(Collectors.toList());
    }
}
