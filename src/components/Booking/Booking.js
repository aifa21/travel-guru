import React, { useContext } from 'react';
import './Booking.css';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import location from '../FakeData/Location'
import { userContext } from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
const Booking = () => {

    const {Id}=useParams();
    const loc=location.find(loc=>loc.id===Id);
    return (
        
           
     <div className="row">
          <div className="col-md-6 place-div">
              <h3 className="title">{loc.name}</h3>
                <p className="description">{loc.description}</p>
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