package com.example.hbm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer user_id;

	@Column(unique =true)
	@NotEmpty(message = "User Name is Required")
	private String username;

	@Column(unique =true)
	@NotEmpty(message = "Email is Required")
	@Email
	private String email;

	@Column
	@NotEmpty(message = "Password is Required")
	private String password;

	@Column
	@NotEmpty(message = "Role is Required")
	private String role;

	@Column
	@NotEmpty(message = "Mobile number is Required")
	private String mobile;

	@Column
	@NotEmpty(message = "Address is Required")
	private String address;
}
