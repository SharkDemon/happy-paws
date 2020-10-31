package com.rd.hackathon.happypaws.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rd.hackathon.happypaws.model.Trip;
import com.rd.hackathon.happypaws.repository.TripRepository;

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepo;

    public TripService() {
        super();
    }

    public List<Trip> getAllTrips() {
        return tripRepo.findAll();
    }

    public Optional<Trip> getTripBydId(Integer tripId) {
        return tripRepo.findById(tripId);
    }

}
