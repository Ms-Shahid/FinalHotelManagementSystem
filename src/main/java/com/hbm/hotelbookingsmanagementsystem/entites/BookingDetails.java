package com.hbm.hotelbookingsmanagementsystem.entites;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
public class BookingDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer booking_id;

	@Column
	@Min(value = 1)
	@NotNull(message = "Please provide Hotel id")
	private Integer hotel_id;

	@Column
	@Min(value = 1)
	@NotNull(message = "Please provide Room id")
	private Integer room_id;

	@Column
	@Min(value = 1)
	@NotNull(message = "Please provide user id")
	private Integer user_id;

	@Column
	@NotNull(message = "Please provide Booking date")
	private Date booked_from;

	@Column
	@NotNull(message = "Please provide End date")
	private Date booked_to;

	@Column
	@NotNull(message = "Please provide number of adults")
	private Integer no_of_adults;

	@Column
	@NotNull(message = "Please provide number of children")
	private Integer no_of_children;

	@Column
	@Min(value = 1000)
	@NotNull(message = "Please provide booking amount")
	private Double amount;
	
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "BookingDetails")
	private User user;

	public BookingDetails() {

	}

	public BookingDetails(Integer booking_id, Integer hotel_id, Integer room_id, Integer user_id, Date booked_from,
			Date booked_to, Integer no_of_adults, Integer no_of_children, Double amount,User user) {
		this.booking_id = booking_id;
		this.hotel_id = hotel_id;
		this.room_id = room_id;
		this.user_id = user_id;
		this.booked_from = booked_from;
		this.booked_to = booked_to;
		this.no_of_adults = no_of_adults;
		this.no_of_children = no_of_children;
		this.amount = amount;
		this.user = user;
	}

	
	public BookingDetails( Integer hotel_id,Integer room_id,Integer user_id,Date booked_from,
		     Date booked_to,Integer no_of_adults,Integer no_of_children,Double amount, User user) {
	
		this.hotel_id = hotel_id;
		this.room_id = room_id;
		this.user_id = user_id;
		this.booked_from = booked_from;
		this.booked_to = booked_to;
		this.no_of_adults = no_of_adults;
		this.no_of_children = no_of_children;
		this.amount = amount;
		this.user = user;
	}

	public Integer getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Integer booking_id) {
		this.booking_id = booking_id;
	}

	public Integer getHotel_id() {
		return hotel_id;
	}

	public void setHotel_id(Integer hotel_id) {
		this.hotel_id = hotel_id;
	}

	public Integer getRoom_id() {
		return room_id;
	}

	public void setRoom_id(Integer room_id) {
		this.room_id = room_id;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public Date getBooked_from() {
		return booked_from;
	}

	public void setBooked_from(Date booked_from) {
		this.booked_from = booked_from;
	}

	public Date getBooked_to() {
		return booked_to;
	}

	public void setBooked_to(Date booked_to) {
		this.booked_to = booked_to;
	}

	public Integer getNo_of_adults() {
		return no_of_adults;
	}

	public void setNo_of_adults(Integer no_of_adults) {
		this.no_of_adults = no_of_adults;
	}

	public Integer getNo_of_children() {
		return no_of_children;
	}

	public void setNo_of_children(Integer no_of_children) {
		this.no_of_children = no_of_children;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
