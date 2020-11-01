package com.rd.hackathon.happypaws.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="volunteers")
@Data
public class Volunteer extends AbstractVolunteer {

    @Column(name="birth_date")
    private Date birthDate;

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
