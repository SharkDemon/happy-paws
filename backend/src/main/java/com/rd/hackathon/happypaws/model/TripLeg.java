package com.rd.hackathon.happypaws.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity(name="trip_legs")
@Data
public class TripLeg {

    @Id
    private Integer id;

    @Column(name="trip_id")
    private Integer tripId;

    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="volunteer_id", nullable=false)
    private SimpleVolunteer volunteer;

    @Column(name="pickup_location")
    private String pickupLocation;
    @Column(name="pickup_date")
    private LocalDateTime pickupDate;
    @Column(name="pickup_city")
    private String pickupCity;
    @Column(name="pickup_state")
    private String pickupState;
    @Column(name="pickup_zip")
    private String pickupZip;

    @Column(name="drop_location")
    private String dropLocation;
    @Column(name="drop_date")
    private LocalDateTime dropDate;
    @Column(name="drop_city")
    private String dropCity;
    @Column(name="drop_state")
    private String dropState;
    @Column(name="drop_zip")
    private String dropZip;

}
