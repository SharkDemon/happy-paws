package com.rd.hackathon.happypaws.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rd.hackathon.happypaws.model.Volunteer;
import com.rd.hackathon.happypaws.repository.VolunteerRepository;

@Service
public class VolunteerService {

    @Autowired
    private VolunteerRepository volunteerRepo;

    public VolunteerService() {
        super();
    }

    public List<Volunteer> getAllVolunteers() {
        return volunteerRepo.findAll();
    }

    public Optional<Volunteer> getVolunteerBydId(Integer volunteerId) {
        return volunteerRepo.findById(volunteerId);
    }

}
