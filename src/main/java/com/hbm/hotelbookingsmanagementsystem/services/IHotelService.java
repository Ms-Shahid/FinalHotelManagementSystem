package com.hbm.hotelbookingsmanagementsystem.services;

import java.util.List;

import com.hbm.hotelbookingsmanagementsystem.entites.Hotel;

public interface IHotelService {

	public Hotel addHotel(Hotel hotel);

	public Hotel showHotel(Integer hid);

	public Hotel updateHotel(Hotel hotel, Integer hid);

	public void deleteHotel(Integer hid);

	public List<Hotel> showAllHotel();
}
