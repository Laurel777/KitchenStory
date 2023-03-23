package com.kitchenpro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kitchenpro.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer >{
	Optional<User> findByname(String name);

}
