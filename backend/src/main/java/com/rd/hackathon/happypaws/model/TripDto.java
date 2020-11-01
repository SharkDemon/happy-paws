package com.rd.hackathon.happypaws.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor @AllArgsConstructor
public class TripDto {

    private Trip trip;
    private List<TripLeg> legs;

}
