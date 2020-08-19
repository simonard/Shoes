package com.shoes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "shoes")
public class Shoes {

	@Id
	@Column(name = "shoe_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int shoeId;

	@Column(name = "shoe_name", nullable = false)
	private String shoeName;

	@Column(name = "shoe_size", nullable = false)
	private double shoeSize;

	@Column(name = "shoe_color", nullable = false)
	private String shoeColor;

	@OneToOne
	@JoinColumn(name = "shoe_brand")
	private ShoeBrand shoeBrand;

	public int getShoeId() {
		return shoeId;
	}

	public void setShoeId(int shoeId) {
		this.shoeId = shoeId;
	}

	public String getShoeName() {
		return shoeName;
	}

	public void setShoeName(String shoeName) {
		this.shoeName = shoeName;
	}

	public double getShoeSize() {
		return shoeSize;
	}

	public void setShoeSize(double shoeSize) {
		this.shoeSize = shoeSize;
	}

	public String getShoeColor() {
		return shoeColor;
	}

	public void setShoeColor(String shoeColor) {
		this.shoeColor = shoeColor;
	}

	public ShoeBrand getShoeBrand() {
		return shoeBrand;
	}

	public void setShoeBrand(ShoeBrand shoeBrand) {
		this.shoeBrand = shoeBrand;
	}

	public Shoes(int shoeId, String shoeName, double shoeSize, String shoeColor, ShoeBrand shoeBrand) {
		super();
		this.shoeId = shoeId;
		this.shoeName = shoeName;
		this.shoeSize = shoeSize;
		this.shoeColor = shoeColor;
		this.shoeBrand = shoeBrand;
	}

	public Shoes(String shoeName, double shoeSize, String shoeColor, ShoeBrand shoeBrand) {
		super();
		this.shoeName = shoeName;
		this.shoeSize = shoeSize;
		this.shoeColor = shoeColor;
		this.shoeBrand = shoeBrand;
	}

	public Shoes() {
		super();
	}

}
