package com.kitchenpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kitchenpro.entity.Food;
import com.kitchenpro.entity.User;
@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {

	Food findBydishname(String name);

}
