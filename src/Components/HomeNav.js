import React from "react";

export function HomeNav(){

    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Add User</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Details</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">User Details</a></li>
                <li><a class="dropdown-item" href="#">Room Details</a></li>
                <li><a class="dropdown-item" href="#">Hotel Details</a></li>
                <li><a class="dropdown-item" href="#">Booking Details</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Logout</a>
            </li>
            </ul>
            </nav>
        </div>
    );
}