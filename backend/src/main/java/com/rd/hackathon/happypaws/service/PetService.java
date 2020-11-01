package com.rd.hackathon.happypaws.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rd.hackathon.happypaws.model.Pet;
import com.rd.hackathon.happypaws.repository.PetRepository;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepo;

    public PetService() {
        super();
    }

    public List<Pet> getAllPets() {
        return petRepo.findAll();
    }

    public Optional<Pet> getPetBydId(Integer petId) {
        return petRepo.findById(petId);
    }

    public List<String> getRandomImages(int num, boolean fullsize) {
        List<Pet> randomPets = petRepo.findRandomPets(num);
        return randomPets.stream()
                .map(p -> fullsize ? p.getImage() : p.getImageThumb() )
                .collect(Collectors.toList());
    }

}
