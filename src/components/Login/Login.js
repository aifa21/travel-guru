import React, { useState } from 'react';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import { useForm } from 'react-hook-form';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import fb from './fb.png';
import google from './google.png';

function Login() {
  
  const {register, errors, watch  } = useForm();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }


  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password1'||e.target.name === 'password2'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  
  

const handleSubmit = (e) => {
   
  console.log(user.name, user.email,user.password)

  if(user.name && user.password){  
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user};
      newUserInfo.erorr = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      history.replace(from);
      
    
    })
    .catch( error => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      console.log(error.message)
    });   
    }
  e.preventDefault();
};




  return (
   
   
    <div style={{textAlign: 'center'}}>
      
    
    <div className="login-container">   
        <h4>{newUser ? "Create An Account":"Login"}</h4>
 
      <form onSubmit={handleSubmit}>
      
        {newUser &&  <input   name="name" type="text" onBlur={handleBlur} placeholder="Name" required/>}
         
        <br/>
        <input ref={register({ required: true })} type="text" name="email" onBlur={handleBlur}  placeholder="Email address" required/>
        
       <br/>
       
        <input type="password" name="password" onBlur={handleBlur}  placeholder="Password" required/>
        <br/>

        {newUser&&<input type="password" name="password" onBlur={handleBlur} placeholder="Confirm Password" required/>
        }<br/>
       
       <div className="d-flex justify-content-between " >
       {!newUser && <label><input type="checkbox" /> <small> Remember me </small></label>}
       {!newUser && <a href="#"> <small> Forgot Password?</small></a>}
       </div>
        <br/>
        <input type="submit"  value={newUser ? 'Create an account' : 'Login'}/>
        <br/><br/>
      </form>
      
      <p style={{textAlign:"center"}}>{newUser ? "Already have an account ? ":"Don't have account ?"  }
      <span onClick={()=>setNewUser(!newUser)} style={{color:"#F9A51A",cursor:"pointer"}}>{newUser? " Login" :" Create Account"}</span></p>
      </div>
      <span>_____________________________Or_____________________________</span>   
       <br/><br/>

    <div className="social">
      <div className="google-div validate-input m-b-20">
        <button className="google" onClick={googleSignIn}><img src={google} height="15" alt=""/>Continue with Google</button>
      </div>
      <br/>
  <div className="facebook-div">
      <button className="facebook" onClick={fbSignIn}><img src={fb} height="20" alt=""/>Continue with Facebook</button>
    </div>
    <br/>
    </div>
    </div>
    
   
   
   
  );
}

export default Login;