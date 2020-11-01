package com.rd.hackathon.happypaws.data;

import java.util.Date;

import com.rd.hackathon.happypaws.model.Pet;
import com.rd.hackathon.happypaws.model.SimplePet;

public class PetBuilder {

    private Integer id;
    private String name;
    private String gender;
    private String age;
    private Integer weight;
    private String breed;
    private String image;
    private String imageThumb;
    private Date adoptionDate;

    public PetBuilder setId(Integer id) {
        this.id = id;
        return this;
    }

    public PetBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public PetBuilder setGender(String gender) {
        this.gender = gender;
        return this;
    }

    public PetBuilder setAge(String age) {
        this.age = age;
        return this;
    }

    public PetBuilder setWeight(Integer weight) {
        this.weight = weight;
        return this;
    }

    public PetBuilder setBreed(String breed) {
        this.breed = breed;
        return this;
    }

    public PetBuilder setImage(String image) {
        this.image = image;
        return this;
    }

    public PetBuilder setImageThumb(String imageThumb) {
        this.imageThumb = imageThumb;
        return this;
    }

    public PetBuilder setAdoptionDate(Date adoptionDate) {
        this.adoptionDate = adoptionDate;
        return this;
    }

    public Pet build() {
        Pet pet = new Pet();
        pet.setId(this.id);
        pet.setName(this.name);
        pet.setGender(this.gender);
        pet.setWeight(this.weight);
        pet.setAge(this.age);
        pet.setBreed(this.breed);
        pet.setImage(this.image);
        pet.setImageThumb(this.imageThumb);
        pet.setAdoptionDate(this.adoptionDate);
        return pet;
    }

    public SimplePet buildSimple() {
        SimplePet pet = new SimplePet();
        pet.setId(this.id);
        pet.setName(this.name);
        pet.setImageThumb(this.imageThumb);
        return pet;
    }

}
