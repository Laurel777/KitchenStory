package com.kitchenpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenpro.entity.Food;
import com.kitchenpro.service.FoodService;

@RestController
@RequestMapping("/api/vi")
public class FoodController {
    @Autowired
	private FoodService fs;
    
    @CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/addFood")
    public Food savefood(@RequestBody Food food)
    {
    	return fs.saveFood(food);
    }
    
    @CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/Food")
    public List<Food> getall()
    {
    	return fs.getall();
    }
    @CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/Food/{id}")
        public Food getbyid(@PathVariable int id)
    {
    	return fs.getbyid(id);
    }
    @CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/Foodn/{name}")
    public Food getbyName(@PathVariable String name)
    {
    	return fs.getbyName(name);
    }
    @CrossOrigin(origins="http://localhost:4200")
    @DeleteMapping("/deleted/{id}")
	 public String deletebyid(@PathVariable int id)
	 {
		 return fs.deletebyid(id);
	 }
    
}
