package com.shoes.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shoes.model.ShoeBrand;
import com.shoes.model.Shoes;
import com.shoes.repo.ShoeBrandDao;
import com.shoes.repo.ShoesDao;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(value="/shoes")
public class ShoeController {

	private ShoesDao shoeDao;
	private ShoeBrandDao shoeBrandDao;
	
	@Autowired
	public ShoeController(ShoesDao shoeDao, ShoeBrandDao shoeBrandDao) {
		super();
		this.shoeDao = shoeDao;
		this.shoeBrandDao = shoeBrandDao;
	}
	
	public ShoeController() {
		super();
	}
	
	@GetMapping
	public List<Shoes> getAllShoes(){
		return shoeDao.findAll();
	}
	
	@PostMapping
	public ResponseEntity<List<ShoeBrand>> fillShoeBrand(){
		List<ShoeBrand> list = new ArrayList<>();
		list.add(new ShoeBrand(1, "Nike"));
		list.add(new ShoeBrand(2, "Jordan"));
		shoeBrandDao.saveAll(list);
		return new ResponseEntity<List<ShoeBrand>>(list, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Shoes> addShoe(@RequestBody Shoes shoe){
		return new ResponseEntity<Shoes>(shoeDao.save(shoe), HttpStatus.OK);
	}
	
}
