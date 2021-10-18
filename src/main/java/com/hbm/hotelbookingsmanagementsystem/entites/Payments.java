package com.hbm.hotelbookingsmanagementsystem.entites;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
public class Payments {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer payment_id;
	@Column
	@Min(1)
	@NotNull(message = "Please provide booking id")
	private Integer booking_id;
	@Column
	@Min(5)
	@NotNull(message = "Please provide transaction id")
	private Integer transaction_id;
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "Payments")
	private  Transactions transaction;

	public Payments() {

	}

	public Payments(Integer payment_id, Integer booking_id, Integer transaction_id,Transactions transaction) {
		
		this.payment_id = payment_id;
		this.booking_id = booking_id;
		this.transaction_id = transaction_id;
		this.transaction = transaction;
	}
	
	

	public Payments(Integer booking_id,Integer transaction_id,Transactions transaction) {
		
		this.booking_id = booking_id;
		this.transaction_id = transaction_id;
		this.transaction = transaction;
	}

	public Integer getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(Integer payment_id) {
		this.payment_id = payment_id;
	}

	public Integer getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Integer booking_id) {
		this.booking_id = booking_id;
	}

	public Integer getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(Integer transaction_id) {
		this.transaction_id = transaction_id;
	}

	public Transactions getTransaction() {
		return transaction;
	}

	public void setTransaction(Transactions transaction) {
		this.transaction = transaction;
	}
	

}
