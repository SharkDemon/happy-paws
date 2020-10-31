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

import com.rd.hackathon.happypaws.model.Pet;
import com.rd.hackathon.happypaws.service.PetService;

@RestController
@RequestMapping("/api/pets")
public class PetsController {

    public static final Logger logger = LoggerFactory.getLogger(PetsController.class);

    @Autowired
    private PetService petService;

    @GetMapping(path={"","/"})
    public ResponseEntity<?> getAllPets() {

        logger.info("Fetching all Pets");

        List<Pet> pets = petService.getAllPets();
        logger.info("Found {} pets", pets.size());
        if (pets.isEmpty()) {
            return new ResponseEntity<>(pets, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(pets, HttpStatus.OK);
        }
    }

    @GetMapping(path="/{petId}")
    public ResponseEntity<?> getPet(@PathVariable("petId") Integer id) {

        logger.info("Fetching Pet with id={}", id);

        Optional<Pet> pet = petService.getPetBydId(id);
        if (pet.isEmpty()) {
            return new ResponseEntity<>("Pet not found", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(pet.get(), HttpStatus.OK);
        }
    }

}
