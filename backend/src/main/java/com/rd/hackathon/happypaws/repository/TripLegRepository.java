package com.rd.hackathon.happypaws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rd.hackathon.happypaws.model.TripLeg;

@Repository
public interface TripLegRepository extends JpaRepository<TripLeg, Integer> {

    @Query("SELECT tl FROM trip_legs tl WHERE tl.tripId = :tripId ORDER BY tl.pickupDate ASC")
    List<TripLeg> findLegsForTrip(Integer tripId);

}
