package com.shoes.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoes.model.Users;

@Repository
public interface UsersDao extends JpaRepository<Users, Integer>{

	
}