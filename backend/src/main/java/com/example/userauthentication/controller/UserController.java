package com.example.userauthentication.controller;

import com.example.userauthentication.entity.User;
import com.example.userauthentication.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody User user){

        userRepository.save(user);

        return "User Registered Successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existingUser =
                userRepository.findByEmailAndPassword(
                        user.getEmail(),
                        user.getPassword()
                );

        if(existingUser != null){
            return "Login Successful";
        }
        else{
            return "Invalid Email or Password";
        }
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestBody User user){

        User existingUser =
                userRepository.findByEmailOrMobile(
                        user.getEmail(),
                        user.getMobile()
                );

        if(existingUser == null){
            return "User not found";
        }

        String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

        existingUser.setOtp(otp);

        userRepository.save(existingUser);

        return "Your OTP is: " + otp;
    }
    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody User user){

        User existingUser =
                userRepository.findByEmailOrMobile(
                        user.getEmail(),
                        user.getMobile()
                );

        if(existingUser == null){
            return "User not found";
        }

        if(existingUser.getOtp() != null &&
                existingUser.getOtp().equals(user.getOtp())){

            return "OTP Verified Successfully";
        }
        else{
            return "Invalid OTP";
        }
    }
    @PostMapping("/reset-password")
    public String resetPassword(@RequestBody User user) {

        User existingUser =
                userRepository.findByEmailOrMobile(
                        user.getEmail(),
                        user.getMobile()
                );

        if (existingUser == null) {
            return "User not found";
        }

        existingUser.setPassword(user.getPassword());

        // OTP clear kar do taaki dobara use na ho
        existingUser.setOtp(null);

        userRepository.save(existingUser);

        return "Password Reset Successfully";
    }

}