package com.shoes.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoes.model.Shoes;

@Repository
public interface ShoesDao extends JpaRepository<Shoes, Integer>{

	
}
