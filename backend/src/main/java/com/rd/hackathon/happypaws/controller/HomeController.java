package com.rd.hackathon.happypaws.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rd.hackathon.happypaws.service.PetService;

@RestController
@CrossOrigin(origins="*", maxAge=120)
@RequestMapping("/api/home")
public class HomeController {

    public static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private PetService petService;

    @GetMapping(path={"/carousel/","/carousel"})
    public ResponseEntity<?> getHomeCarouselImages() {

        logger.info("Fetching home carousel images");

        List<String> images = petService.getRandomImages(5, true);
        logger.info("Found {} images", images.size());
        if (images.isEmpty()) {
            return new ResponseEntity<>(images, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(images, HttpStatus.OK);
        }
    }

}
