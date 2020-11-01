package com.rd.hackathon.happypaws.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;

@MappedSuperclass
@Data
public abstract class AbstractPet {

    @Id
    private Integer id;

    private String name;

    private String image;

    @Column(name="image_thumb")
    private String imageThumb;

}
