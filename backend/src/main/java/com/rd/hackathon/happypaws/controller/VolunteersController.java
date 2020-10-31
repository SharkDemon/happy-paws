package com.rd.hackathon.happypaws.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rd.hackathon.happypaws.model.Volunteer;
import com.rd.hackathon.happypaws.service.VolunteerService;

@RestController
@RequestMapping("/api/volunteers")
public class VolunteersController {

    public static final Logger logger = LoggerFactory.getLogger(VolunteersController.class);

    @Autowired
    private VolunteerService volunteerService;

    @GetMapping(path={"","/"})
    public ResponseEntity<?> getAllVolunteers() {

        logger.info("Fetching all Volunteers");

        List<Volunteer> volunteers = volunteerService.getAllVolunteers();
        logger.info("Found {} volunteers", volunteers.size());
        if (volunteers.isEmpty()) {
            return new ResponseEntity<>(volunteers, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(volunteers, HttpStatus.OK);
        }
    }

    @GetMapping(path="/{volunteerId}")
    public ResponseEntity<?> getVolunteer(@PathVariable("volunteerId") Integer id) {

        logger.info("Fetching Volunteer with id={}", id);

        Optional<Volunteer> volunteer = volunteerService.getVolunteerBydId(id);
        if (volunteer.isEmpty()) {
            return new ResponseEntity<>("Volunteer not found", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(volunteer.get(), HttpStatus.OK);
        }
    }

}
