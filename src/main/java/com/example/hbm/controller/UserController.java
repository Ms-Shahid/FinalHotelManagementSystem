package com.example.hbm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hbm.entity.Login;
import com.example.hbm.service.IUserService;

@RestController
@RequestMapping(value="/user")
public class UserController {
	@Autowired
	private IUserService userService;
	
	@PostMapping(value="/login")
	public ResponseEntity<String> login(@RequestBody Login login){
		Boolean isLoginSucess = userService.login(login.getUsername(),login.getPassword());
		
		String msg="";
		if (isLoginSucess)
		{
			msg ="Welcome," +login.getUsername();
			return new ResponseEntity<String>(msg, HttpStatus.OK);
		} 
		
		else 
		{
			msg ="Invalid Username and Password";
			return new ResponseEntity<String>(msg, HttpStatus.NOT_FOUND);
		}
	}


}
