package com.kitchenpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenpro.entity.User;
import com.kitchenpro.service.UserService;

@RestController
@RequestMapping("/api/vi")
public class UserController {
	@Autowired
	private UserService service;
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/addUser")
	public User adduser(@RequestBody User user)
	{
		return service.saveUser(user);
	}
	
	@PostMapping("/addUsers")
	public List<User> addusers(@RequestBody List<User> users)
	{
		return service.saveall(users);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/Users")
	public List<User> findAll()
	{
		return service.getUser();
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/User/{id}")
	public User findbyid( @PathVariable int id)
	{
		return service.getUserbyId(id);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/Usern/{name}")
	public User findbyname( @PathVariable String name)
	{
		return service.getUserbyName(name);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PutMapping("/update")
	public User updateuser(@RequestBody User user)
	{
		return service.updateUser(user);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	public String deleteUser( @PathVariable int id)
	{
		return service.deleteUser(id);
	}
}
