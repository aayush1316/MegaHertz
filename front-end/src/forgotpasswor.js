import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Vector1Image from './assests/img/Frame_15.png';

import Frame17Image from './assests/img/Frame_17.png';

import NotificationImage from './assests/img/notification.png';

import IconsImage from './assests/img/Email.png';

import VectorImage from './assests/img/group.png';

import styled from "styled-components";

const ForgotPassword1 = styled("div")({
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

const Notification = styled("img")({
  height: `382.5px`,
  width: `382.5px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `794px`,
  top: `225px`,
});

const Frame23 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `450px`,
  height: `384px`,
  left: `239px`,
  top: `225px`,
});

const ForgotPassword2 = styled("div")({
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
  width: `379.5px`,
  position: `absolute`,
  left: `35px`,
  top: `0px`,
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
  top: `149px`,
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

const EMail = styled.input({
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

const Email = styled.button({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `21px`,
  height: `16.8px`,
  left: `27px`,
  top: `29px`,
  overflow: `hidden`,
});

const Layer2 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `21px`,
  height: `16.8px`,
  left: `0px`,
  top: `0px`,
});

const Icons = styled("img")({
  height: `16.8px`,
  width: `21px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Verify = styled.button({
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
  top: `333px`,
});

const Group3 = styled.img({
    height: `50px`,
    width: `50px`,
    position: `absolute`,
    left: `370px`,
    top: `333px`,
});



function ForgotPassword() {
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
    <ForgotPassword1>
      <Frame15>
        <Vector1 src={Vector1Image} loading='lazy' alt={"Vector 1"}/>
      </Frame15>
      <Frame17 src={Frame17Image} loading='lazy' alt={"Frame 17"}/>
      <Notification src={NotificationImage} loading='lazy' alt={"notification"}/>
      <Frame23>
        <ForgotPassword2>
          {`Forgot Password?`}
        </ForgotPassword2>
        <Group4>
          <Rectangle1>
          </Rectangle1>
          <EMail        
             type='email'
             name='email'
             placeholder='email'
             value={loginData.email}
             onChange={handleLoginChange}
             required
          />
       
          <Email>
            <Layer2>
              <Icons src={IconsImage} loading='lazy' alt={"Icons"}/>
            </Layer2>
          </Email>
        </Group4>
        <Verify type='submit' onClick={handleLoginSubmit}>
          {`Verify`}
        </Verify>
        <Group3 src={VectorImage} loading='lazy' alt={"Vector"}>
        </Group3>
      </Frame23>
    </ForgotPassword1>);

}

export default ForgotPassword;

  