package com.rd.hackathon.happypaws.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rd.hackathon.happypaws.model.TripLeg;
import com.rd.hackathon.happypaws.repository.TripLegRepository;

@Service
public class TripLegService {

    @Autowired
    private TripLegRepository tripLegRepo;

    public TripLegService() {
        super();
    }

    public List<TripLeg> getAllTripLegsForTrip(Integer tripId) {
        return tripLegRepo.findLegsForTrip(tripId);
    }

}
