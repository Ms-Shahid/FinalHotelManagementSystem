import React, { Component } from "react";
import axios from 'axios'
import {HomeNav} from './HomeNav'

export class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            successMsg : '',
            failedMsg : '',
            loggedIn : false 
        }
    }

    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    handleLogout=()=>{
        this.setState({
            loggedIn : false
        })
    }

    handleFormSubmission=(event)=>{
         event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/user/login',this.state)
        .then((response)=>{
            console.log(response.data.msg)
            if(response.data.msg != "Invalid Username and Password")
            {
            this.setState({
                username:'',
                password: '',
                successMsg:response.data.msg,
                loggedIn : true
            })
        }
        else{
            this.setState({
                username:'',
                password: '',
                failedMsg:response.data.msg,
                loggedIn : false
            })
        }
        }).catch(error=>{
            console.log(error)
            this.setState({
                username:'',
                password: '',
                msg:''})
        })
     }

    render(){
        if(!this.state.loggedIn)
        {
            return(
                <React.Fragment>
                <div className="container mt-3">
                <h3>Admin Login</h3>
                        <hr/>
                    <form onSubmit={this.handleFormSubmission}>                       
                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={this.handleUsername} value={this.state.username} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={this.handlePassword} value={this.state.password} className="form-control" type="password"/>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">Login</button>
                    </form>
                </div>
                <h5 className="text-danger container mt-2">{this.state.failedMsg}</h5>
                </React.Fragment>
            )
        }else{
             return(
                 <div className="container">
                     <h4 className="text-danger">{this.state.successMsg}</h4>
                     <HomeNav />
                     <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                 </div>
             )
        }
    }
}