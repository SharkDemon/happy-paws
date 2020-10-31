package com.rd.hackathon.happypaws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rd.hackathon.happypaws.model.Trip;

@Repository
public interface TripRepository extends JpaRepository<Trip, Integer> {
}
