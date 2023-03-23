package com.kitchenpro.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Food")
public class Food {

	 @Id
	 @GeneratedValue
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDishname() {
		return dishname;
	}
	public void setDishname(String dishname) {
		this.dishname = dishname;
	}
	public String getDishcategory() {
		return dishcategory;
	}
	public void setDishcategory(String dishcategory) {
		this.dishcategory = dishcategory;
	}
	public int getDishprice() {
		return dishprice;
	}
	public void setDishprice(int dishprice) {
		this.dishprice = dishprice;
	}
	private String dishname;
	private String dishcategory;
	private int dishprice;
	
	
	
}
