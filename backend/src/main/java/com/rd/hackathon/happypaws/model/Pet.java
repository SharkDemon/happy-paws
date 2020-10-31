package com.rd.hackathon.happypaws.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="pets")
@Data
public class Pet extends AbstractPet {

    private String gender;

    private String age;

    private Integer weight;

    private String breed;

    private String image;

    @Column(name="adopt_date")
    private Date adoptionDate;

}
