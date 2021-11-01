import React, { useEffect, useState } from "react";
import { BookingGet } from "./BookingGet";

export function BookingDelete(){

    const [booking,setBooking] = useState([])

    // useEffect( () =>{
    //     fetch('http://localhost:8080/bookingdetails').then( (result) =>{
    //         setBooking(result)
    //     })
    // },[])

    console.log(booking)

    return(
        <div>
           
            <BookingGet />
        </div>
    )
    
}