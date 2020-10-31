package com.rd.hackathon.happypaws.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity(name="trips")
@Data
public class Trip {

    @Id
    private Integer id;

    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="pet_id", nullable=false)
    private SimplePet pet;

    @Column(name="start_date")
    private Date startDate;
    @Column(name="start_city")
    private String startCity;
    @Column(name="start_state")
    private String startState;
    @Column(name="start_zip")
    private String startZip;

    @Column(name="end_date")
    private Date endDate;
    @Column(name="end_city")
    private String endCity;
    @Column(name="end_state")
    private String endState;
    @Column(name="end_zip")
    private String endZip;

    // HANDLE TripLeg SCENARIO

}
