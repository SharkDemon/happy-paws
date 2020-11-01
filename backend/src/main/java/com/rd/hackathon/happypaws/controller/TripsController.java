package com.rd.hackathon.happypaws.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rd.hackathon.happypaws.model.Trip;
import com.rd.hackathon.happypaws.model.TripDto;
import com.rd.hackathon.happypaws.model.TripLeg;
import com.rd.hackathon.happypaws.service.TripLegService;
import com.rd.hackathon.happypaws.service.TripService;

@RestController
@CrossOrigin(origins="*", maxAge=120)
@RequestMapping("/api/trips")
public class TripsController {

    public static final Logger logger = LoggerFactory.getLogger(TripsController.class);

    @Autowired
    private TripService tripService;
    @Autowired
    private TripLegService tripLegService;

    @GetMapping(path={"","/"})
    public ResponseEntity<?> getAllTrips() {

        logger.info("Fetching all Trips");

        List<Trip> trips = tripService.getAllTrips();
        logger.info("Found {} trips", trips.size());
        if (trips.isEmpty()) {
            return new ResponseEntity<>(trips, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(trips, HttpStatus.OK);
        }
    }

    @GetMapping(path="/{tripId}")
    public ResponseEntity<?> getTrip(@PathVariable("tripId") Integer id) {

        logger.info("Fetching Trip with id={}", id);

        Optional<Trip> trip = tripService.getTripBydId(id);

        if (trip.isEmpty()) {
            return new ResponseEntity<>("Trip not found", HttpStatus.BAD_REQUEST);
        } else {

            List<TripLeg> legs = tripLegService.getAllTripLegsForTrip(trip.get().getId());

            return new ResponseEntity<>(new TripDto(trip.get(), legs), HttpStatus.OK);
        }
    }

}
