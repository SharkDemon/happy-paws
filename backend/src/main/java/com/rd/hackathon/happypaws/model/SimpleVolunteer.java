package com.rd.hackathon.happypaws.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="volunteers")
@Data
public class SimpleVolunteer extends AbstractVolunteer {
}
