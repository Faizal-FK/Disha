package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

// Business logic yahan hota hai
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // User save karna
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
