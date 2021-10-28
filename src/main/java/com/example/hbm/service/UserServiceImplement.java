package com.example.hbm.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hbm.entity.User;
import com.example.hbm.repository.UserRepository;

@Service
public class UserServiceImplement implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public boolean login(String username, String password) {
		
		Optional<User> opt= userRepository.findByUsernameAndPassword(username, password);
		
		if(opt.isPresent())
		{
			return true;
		}
		return false;
		}

	 /*@Override
	public Optional<User> findByUsernameAndPassword(String user_name, String paassword) {
		// TODO Auto-generated method stub
		return null;
	}
*/
	
	
	
}
