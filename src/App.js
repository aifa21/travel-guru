import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Hotel from './components/Hotel/Hotel';
import Location from './components/FakeData/Location'
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
     
      <Router>
      <Header></Header>
        <Switch>
        
        <Route path="/home">
            <Home></Home>
          </Route>
         
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/booking/:imageId'>
            <Booking></Booking>
          </Route>
          <PrivateRoute >
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;