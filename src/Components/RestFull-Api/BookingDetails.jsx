import React from "react";
import BookingService from "../Services/BookingService";
import axios from 'axios';
import { Booking } from "./BookingGet";

export class BookingDetails extends React.Component{

    constructor(props){
        super(props)

        this.state={
            hotel_id:'',
            room_id:'',
            user_id:'',
            booked_from:'',
            booked_to:'',
            no_of_adults:'',
            no_of_children:'',
            amount:'',
            isBookedIn:false
        }
    }
    
    handleHotelId=(event)=>{
        this.setState({
            hotel_id:event.target.value
           
        })
    }
    
    handleRoomId=(event) =>{
        this.setState({
            room_id:event.target.value
        })
    }

    handleUserId=(event) =>{
        this.setState({
            user_id:event.target.value
        })
    }

    handleBookingFrom=(event) =>{
        this.setState({
            booked_from:event.target.value
        })
    }

    handleBookingTo=(event)=>{
        this.setState({
            booked_to:event.target.value
        })
    }

    handleAdults=(event) =>{
        this.setState({
            no_of_adults:event.target.value
        })
    }

    handleChildren=(event) =>{
        this.setState({
            no_of_children:event.target.value
        })
    }

    handleAmount=(event) =>{
        this.setState({
            amount:event.target.value
        })
    }

    handleSubmit=(event) =>{
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8080/bookingdetails/bookingdetails/save',this.state)
        .then((response) =>{
            console.log(response)
            alert("Booking added successfully");
            this.setState({
                hotel_id:'',
                room_id:'',
                user_id:'',
                booked_from:'',
                booked_to:'',
                no_of_adults:'',
                no_of_children:'',
                amount:'',
                isBookedIn:true
            })
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                hotel_id:'',
                room_id:'',
                user_id:'',
                booked_from:'',
                booked_to:'',
                no_of_adults:'',
                no_of_children:'',
                amount:''
               
            })
        })
    }

    //deleteOperaion
    
   render(){
    return(
        <div>
           <form onSubmit={this.handleSubmit}>
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                
                        <div class="form-group">
                            <div class="row">
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Hotel Id</label>
                                <input onChange={this.handleHotelId} value={this.state.hotel_id} type="number" class="form-control" id="validationServer01" placeholder="Provide Hotel Id" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Room Id</label>
                                <input onChange={this.handleRoomId} value={this.state.room_id} type="number" class="form-control" id="inputEmail4" placeholder="Provide Room Id" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">User Id</label>
                                <input onChange={this.handleUserId} value={this.state.user_id} type="number" class="form-control" id="inputuserId" placeholder="Provide User Id" required />
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Booked From</label>
                                <input onChange={this.handleBookingFrom} value={this.state.booked_from} type="date" class="form-control" id="bookingdate" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Booked Till</label>
                                <input onChange={this.handleBookingTo} value={this.state.booked_to} type="date" class="form-control" id="inputdate" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">No of Adults</label>
                                <input onChange={this.handleAdults} value={this.state.no_of_adults} type="number" class="form-control" id="inputAdults" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">No of Children</label>
                                <input onChange={this.handleChildren} value={this.state.no_of_children} type="number" class="form-control" id="inputChildren" required/>
                                
                                <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Booking Amount</label>
                                <input onChange={this.handleAmount} value={this.state.amount} type="number" class="form-control" id="inputAmount" placeholder="Enter Amount" required/>
                            </div>
                            <br/>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button  type="submit" class="btn btn-primary" >Submit</button>
                                {/* onClick={this.submit.bind(this)} */}
                            </div>
                        </div> 
                    </div>
                </div>      
            </form>
        </div>
    );
   }
}

