package com.rd.hackathon.happypaws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rd.hackathon.happypaws.model.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer> {

    @Query(value="SELECT * FROM pets p ORDER BY random() LIMIT :numberToReturn", nativeQuery=true)
    List<Pet> findRandomPets(@Param("numberToReturn") int num);

}
