import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const navigate=useNavigate();
    const {id,token}=useParams();
const [loginData,setLoginData] = useState({
  password:'',
})


//submit function
const handleLoginSubmit = async(e) => {
 e.preventDefault();

 try{
   const response = await axios.post(`http://localhost:8000/api/reset-password/${id}/${token}`,loginData);
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
      <h1>Reset Password</h1>
      <form onSubmit={handleLoginSubmit}>
        <input 
        type='password'
        name='password'
        placeholder='password'
        value={loginData.password}
        onChange={handleLoginChange}
        required
        />
        <button type='submit'>Update</button>
        
        <p>
          Not registered yet? <Link to ='/registration'>Register Here</Link>
        </p>
      </form>
    </div>
  )
}

export default ResetPassword
