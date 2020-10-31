package com.rd.hackathon.happypaws.model;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;

@MappedSuperclass
@Data
public abstract class AbstractPet {

    @Id
    private Integer id;

    private String name;

}
