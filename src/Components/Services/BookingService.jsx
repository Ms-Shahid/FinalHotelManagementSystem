import axios from 'axios';

const Booking_Post='http://localhost:8080/bookingdetails/save';
const Booking_GET = 'http://localhost:8080/bookingdetails/showAllBookings';
const Booking_Get_By_ID = 'http://localhost:8080/bookingDetails//{booking_id}'
const Booking_Delete = 'http://localhost:8080/bookingdetails'



class BookingService{

    
    getBookingDetails(){
        axios.get(Booking_GET);
    }
}

export default new BookingService();



