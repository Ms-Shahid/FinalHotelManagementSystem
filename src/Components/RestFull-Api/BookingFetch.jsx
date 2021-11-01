import React from "react";
import axios from 'axios';

export class BookingFetch extends React.Component{

    constructor(props){
        super(props)

        this.state={
            fetchById:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/bookingDetails//{booking_id}')
        .then(response =>{
            this.setState({
                fetchById:response.data
            })
            console.log(response.data)
        })
    }
    render(){
        return(
            <div></div>
        );
    }
}