import React from 'react';
import { useState } from 'react';
import HotelDetails from '../FakeData/HotelDetails';
//import './Hotels.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Hotel = () => {
    const total = HotelDetails;

    return (
        <div className="course-container">
            <div className="subject-container">
            
                {
                total.map(hd=><div className="hotelData">
            <div className="hotelData-img">
              <img src={hd.img}/>
            </div>
        <div className="hotelData-info">
            <h3 className="hotelData-name">{hd.hotelName}</h3>
            <small>{hd.roomDetails}</small>
            <small>{hd.services}</small>
            <img src={hd.star} height="10" alt="" />
            <small>{hd.rating}</small> 
            <span>${hd.price}</span><span>night</span>
            <br/>
           
            
            </div>
        </div>
                     )
                }
            
            </div>

            
           
        </div>
    );
};

export default Hotel;