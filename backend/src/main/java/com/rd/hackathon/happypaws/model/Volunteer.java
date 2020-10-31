package com.rd.hackathon.happypaws.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity(name="volunteers")
@Data
public class Volunteer {

    @Id
    private Integer id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="birth_date")
    private Date birthDate;

    private Boolean verified;

    private String city;

    private String state;

    private String zip;

    // vehicle information

    private String carColor;

    private String carMake;

    private String carModel;

    private String licensePlateNumber;

    private String licensePlateState;

}
