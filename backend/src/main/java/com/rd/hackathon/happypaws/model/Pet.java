package com.rd.hackathon.happypaws.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name="pets")
@Data
public class Pet extends AbstractPet {

    private String gender;

    private String age;

    private Integer weight;

    private String breed;

    @Column(name="adopt_date")
    @JsonIgnore
    private LocalDate adoptionDate;

    public String getFormattedAdoptionDate() {
        return adoptionDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }

}
