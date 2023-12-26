import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const navigate=useNavigate();
const [loginData,setLoginData] = useState({
  email:'',
})


//submit function
const handleLoginSubmit = async(e) => {
 e.preventDefault();

 try{
   const response = await axios.post('http://localhost:8000/api/forgot-password',loginData);
   const success = response.data;
   if(success){
    navigate("/login");
   }
 }
 catch(error){
  console.error('Login error',error)
 }
 setLoginData({
    email:'',
    password:''
 })
}

  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }
  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleLoginSubmit}>
        <input 
        type='email'
        name='email'
        placeholder='email'
        value={loginData.email}
        onChange={handleLoginChange}
        required
        />
        <button type='submit'>Next</button>
        
        <p>
          Not registered yet? <Link to ='/registration'>Register Here</Link>
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
