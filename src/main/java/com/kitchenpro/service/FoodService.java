package com.kitchenpro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kitchenpro.entity.Food;
import com.kitchenpro.repository.FoodRepository;
@Service
public class FoodService {

	@Autowired
	private FoodRepository foodrepo;
	
	public Food saveFood(Food food)
	{
		return foodrepo.save(food);	}
	
	public List<Food> getall()
	{
		return foodrepo.findAll();
		
	}
	
	public Food getbyid(int id)
	{
		return foodrepo.findById(id).orElse(null);
		
	}
	
	public Food getbyName(String name)
	{
		return foodrepo.findBydishname(name);
	}

    public String deletebyid(int id)
    {
    	foodrepo.deleteById(id);
    	return "Food item got deleted";
    }

}
