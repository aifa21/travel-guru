import React from 'react';
import './HotelData.css';
import HotelDetails from '../FakeData/HotelDetails';
import star from './star_1_.png';
const HotelData = (props) => {
    const {hotelName,roomDetails,rating,img,price}=props.hotelData;
   
    return (
        <div>
           
           <div className="hotelData">
            <div className="hotelData-img">
              <img src={img}/>
            </div>
        <div className="hotelData-info">
            <h3 className="hotelData-name">{name}</h3>
            <small>{roomDetails}</small>
            <small>{services}</small>
            <img src={star} height="10" alt="" />
            <small>{rating}</small> 
            <span>${price}</span><span>night</span>
            <br/>
           
            
            </div>
        </div>
            
        </div>
    );
};

export default HotelData;