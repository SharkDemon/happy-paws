package com.rd.hackathon.happypaws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rd.hackathon.happypaws.model.Pet;
import com.rd.hackathon.happypaws.service.PetService;

@RestController
public class PetsController {

    @Autowired
    private PetService petService;

    @GetMapping(path="/api/pets")
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

}
