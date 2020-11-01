package com.rd.hackathon.happypaws.model;

import java.time.LocalDate;
import java.time.Period;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name="volunteers")
@Data
public class Volunteer extends AbstractVolunteer {

    @Column(name="birth_date")
    @JsonIgnore
    private LocalDate birthDate;

    private String city;

    private String state;

    private String zip;

    // vehicle information

    private String carColor;

    private String carMake;

    private String carModel;

    private String licensePlateNumber;

    private String licensePlateState;

    private String image;

    public int getAge() {
        return Period.between(birthDate, LocalDate.now()).getYears();
    }

}
