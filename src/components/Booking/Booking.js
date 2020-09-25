import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Booking.css';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import location from '../FakeData/Location'
import { userContext } from '../../App';
const Booking = () => {

    const {imageId}=useParams();
    const place=location.find(place=>place.id===imageId);
    return (
        
           
     <div className="row">
          <div className="col-md-6 place-div">
              <h3 className="title">{place.name}</h3>
                <p className="description">{place.description}</p>
            </div>

     <div className="col-md-6 form-div">
       <form>
          <div className="form-group">
            <label className="form-label">Origin</label>
                 <input required className="form-control" type="text" name="origin" placeholder="Origin" />
                   </div>
    <div className="form-group">
        <label className="form-label">Destination</label>
            <input required className="form-control" type="text" name="destination" placeholder="Destination" />
               </div>
                           
    <div className="date-div">
                                    
         <div className="date-group">
            <label >From</label><br/>
                 <input  type="date" name="from" id="" required/>
                        </div>
     <div className="date-group">
             <label >To</label><br/>
                 <input  type="date" name="to" id="" required />
                      </div>
                            </div>
                            
    <Link to="/login"><button type="submit"  id="booking-button" className="btn btn-warning  "> Start Booking</button></Link>
                        </form>
                    </div>
                </div>
          
        
    );
};

export default Booking;