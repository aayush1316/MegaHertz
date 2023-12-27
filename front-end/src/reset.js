import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Vector1Image from './assests/im/Vector_1.png';

import Frame17Image from './assests/images/Vector_1.png';

import BatteryImage from './assests/im/battery.png';

import VectorImage from './assests/im/Vector.png';

import Vector2Image from './assests/im/Vector.png';

import Vector3Image from './assests/im/Vector.png';

import styled from "styled-components";

const NewPassword1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1280px`,
  height: `832px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Frame15 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `782px`,
  height: `238px`,
  left: `-63px`,
  top: `-92px`,
});

const Vector1 = styled("img")({
  height: `238px`,
  width: `782px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame17 = styled("img")({
  height: `238px`,
  width: `782px`,
  position: `absolute`,
  left: `2204px`,
  top: `1136px`,
});

const Battery = styled("img")({
  height: `375px`,
  width: `375px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `843px`,
  top: `214px`,
});

const Frame24 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `450px`,
  height: `468px`,
  left: `269px`,
  top: `214px`,
});

const NewPassword2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `700`,
  fontSize: `45px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `309px`,
  height: `61.5px`,
  position: `absolute`,
  left: `71px`,
  top: `0px`,
});

const Group2 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `450px`,
  height: `75px`,
  left: `0px`,
  top: `263px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 12px 30px rgba(0, 0, 0, 0.1)`,
  borderRadius: `60px`,
  width: `450px`,
  height: `75px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector = styled("img")({
  height: `26.25px`,
  width: `21px`,
  position: `absolute`,
  left: `27px`,
  top: `21px`,
});

const ConfirmPassword = styled.input({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(200, 200, 200, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `22.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `223.5px`,
  height: `25.5px`,
  position: `absolute`,
  left: `68px`,
  top: `21px`,
});

const Group4 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `450px`,
  height: `75px`,
  left: `0px`,
  top: `141px`,
});

const Rectangle11 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 12px 30px rgba(0, 0, 0, 0.1)`,
  borderRadius: `60px`,
  width: `450px`,
  height: `75px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector2 = styled("img")({
  height: `26.25px`,
  width: `21px`,
  position: `absolute`,
  left: `27px`,
  top: `21px`,
});

const Password = styled.input({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(200, 200, 200, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `22.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `172.5px`,
  height: `25.5px`,
  position: `absolute`,
  left: `68px`,
  top: `21px`,
});

const Create = styled.button({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `700`,
  fontSize: `37.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `132px`,
  height: `51px`,
  position: `absolute`,
  left: `234px`,
  top: `417px`,
});

const Group3 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `84px`,
  height: `51px`,
  left: `366px`,
  top: `417px`,
});

const Rectangle2 = styled("div")({
  background: `linear-gradient(121.26deg, rgba(249, 119, 148, 1) -2.880907369561059e-15%, rgba(98, 58, 162, 1) 100%)`,
  borderRadius: `25.5px`,
  width: `84px`,
  height: `51px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector3 = styled("img")({
  height: `27px`,
  width: `27px`,
  position: `absolute`,
  left: `83px`,
  top: `66px`,
});


function NewPassword() {
    
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
    <NewPassword1>
      <Frame15>
        <Vector1 src={Vector1Image} loading='lazy' alt={"Vector 1"}/>
      </Frame15>
      <Frame17 src={Frame17Image} loading='lazy' alt={"Frame 17"}/>
      <Battery src={BatteryImage} loading='lazy' alt={"battery"}/>
      <Frame24>
        <NewPassword2>
          {`New Password`}
        </NewPassword2>
        <Group2>
          <Rectangle1>
          </Rectangle1>
          <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
          <ConfirmPassword
                type='password'
                name='password'
                placeholder='password'
                value={loginData.password}
                onChange={handleLoginChange}
                required
          />
        </Group2>
        <Group4>
          <Rectangle11>
          </Rectangle11>
          <Vector2 src={Vector2Image} loading='lazy' alt={"Vector"}/>
          <Password
                type='password'
                name='password'
                placeholder='password'
                value={loginData.password}
                onChange={handleLoginChange}
                required
          />
        </Group4>
        <Create type='submit' onClick={handleLoginSubmit}>
          {`Create`}
        </Create>
        <Group3>
          <Rectangle2>
          </Rectangle2>
          <Vector3 src={Vector3Image} loading='lazy' alt={"Vector"}/>
        </Group3>
      </Frame24>
    </NewPassword1>);
 }

export default NewPassword;

  