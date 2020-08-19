package com.shoes.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoes.model.ShoeBrand;

@Repository
public interface ShoeBrandDao extends JpaRepository<ShoeBrand, Integer>{

}
