package com.kitchenpro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kitchenpro.entity.User;
import com.kitchenpro.repository.UserRepository;
@Service
public class UserService {

	@Autowired
	private UserRepository repo;
	
	
	public User saveUser(User user)
	{
		return repo.save(user);
	}
	
	public List<User> saveall(List<User> users)
	{
		return repo.saveAll(users);
	}
	
	public List<User> getUser()
	{
		return repo.findAll();
	}
	
	public User getUserbyId(int id)
	{
		return repo.findById(id).orElse(null);
	}
	
	public User getUserbyName(String name)
	{
		return repo.findByname(name).orElse(null);
	}
	
	public String deleteUser(int id)
	{ repo.deleteById(id);
		return "User deleted";
	}
	
	public User updateUser(User user)
	{
		User exuser = repo.findById(user.getId()).orElse(null);
		exuser.setName(user.getName());
		exuser.setPassword(user.getPassword());
		exuser.setCity(user.getCity());
		return repo.save(exuser);
	}
	
	
}
