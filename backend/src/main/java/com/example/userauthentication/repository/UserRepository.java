
package com.example.userauthentication.repository;


import com.example.userauthentication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository
        extends JpaRepository<User, Long> {


    User findByEmail(String email);


    User findByMobile(String mobile);

    User findByEmailAndPassword(String email, String password);
    User findByEmailOrMobile(String email, String mobile);


}