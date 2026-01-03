package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.User;

// Ye database se direct baat karta hai
public interface UserRepository extends JpaRepository<User, Long> {
}
