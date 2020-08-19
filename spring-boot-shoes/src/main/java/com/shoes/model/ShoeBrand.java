package com.shoes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * Lookup table for the shoes getting the shoes brand which contain the id and name associated with the id.
 * @author simonnardos
 *
 */
@Entity
@Table(name="shoe_brand")
public class ShoeBrand {

	@Id
	@Column(name="shoe_brand_id")
	private int shoeBrandId;
	
	@Column(name="shoe_brand_name")
	private String shoeBrandName;

	public int getShoeBrandId() {
		return shoeBrandId;
	}

	public void setShoeBrandId(int shoeBrandId) {
		this.shoeBrandId = shoeBrandId;
	}

	public String getShoeBrandName() {
		return shoeBrandName;
	}

	public void setShoeBrandName(String shoeBrandName) {
		this.shoeBrandName = shoeBrandName;
	}

	/**
	 * Needed for populating the lookup table which shoe brand is
	 * @param shoeBrandId
	 * @param shoeBrandName
	 */
	public ShoeBrand(int shoeBrandId, String shoeBrandName) {
		super();
		this.shoeBrandId = shoeBrandId;
		this.shoeBrandName = shoeBrandName;
	}
	
	public ShoeBrand(int shoeBrandId) {
		super();
		this.shoeBrandId = shoeBrandId;
		
	}
	
	public ShoeBrand() {
		super();
	}
	
}
