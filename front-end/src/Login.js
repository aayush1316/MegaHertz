import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import Vector1Image from './assests/images/Vector_1.png';

import Frame15Image from './assests/images/Vector_1.png';

import Frame17Image from './assests/images/Frame_17.png';

import VectorImage from './assests/images/Vector3.png';

import Vector2Image from './assests/images/Vector1.png';

import Vector3Image from './assests/images/Vector.png';

import Vector4Image from './assests/images/Vector.png';

import EcoBlubImage from './assests/images/eco_bulb.png';

import EcoBulb from './assests/images/eco_bulb_on.png';

import VectrImage from './assests/img/group.png';

import styled from "styled-components";


const MacBookAir11 = styled("div")({
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

const Frame15 = styled("img")({
  height: `238px`,
  width: `782px`,
  position: `absolute`,
  left: `-63px`,
  top: `-92px`,
});

const Frame17 = styled("img")({
  height: `238px`,
  width: `782px`,
  position: `absolute`,
  left: `2204px`,
  top: `1136px`,
});

const Frame18 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `379px`,
  height: `532.5px`,
  left: `261px`,
  top: `150px`,
});

const Megahertz = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `700`,
  fontSize: `76.80000305175781px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `379px`,
  height: `100px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SignInToYourAccount = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `21.600000381469727px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `243.6px`,
  height: `31.2px`,
  position: `absolute`,
  left: `60px`,
  top: `118px`,
});

const Group1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `360px`,
  height: `60px`,
  left: `1px`,
  top: `199px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 9.600000381469727px 24px rgba(0, 0, 0, 0.1)`,
  borderRadius: `48px`,
  width: `360px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `171.6px`,
  height: `28.8px`,
  left: `17px`,
  top: `16px`,
});

const Profile = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `28.8px`,
  height: `28.8px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const Group = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `17.02px`,
  height: `21.6px`,
  left: `5px`,
  top: `3px`,
});

const Vector = styled("img")({
  height: `10.74px`,
  width: `10.74px`,
  position: `absolute`,
  left: `3px`,
  top: `0px`,
});

const Vector1 = styled("img")({
  height: `6.78px`,
  width: `17.02px`,
  position: `absolute`,
  left: `0px`,
  top: `15px`,
});

const Username = styled.input({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(200, 200, 200, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `21.6px`,
  position: `absolute`,
  left: `32px`,
  top: `4px`,
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
  width: `360px`,
  height: `60px`,
  left: `1px`,
  top: `308px`,
});

const Rectangle11 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 9.600000381469727px 24px rgba(0, 0, 0, 0.1)`,
  borderRadius: `48px`,
  width: `360px`,
  height: `60px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector2 = styled("img")({
  height: `21px`,
  width: `16.8px`,
  position: `absolute`,
  left: `22px`,
  top: `17px`,
});

const Password = styled.input({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(200, 200, 200, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `138px`,
  height: `20.4px`,
  position: `absolute`,
  left: `54px`,
  top: `17px`,
});
const Register = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(190, 190, 190, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `184.8px`,
  height: `28.8px`,
  position: `absolute`,
  left: `40px`,
  top: `409px`,
});

const ForgotYourPassword = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(190, 190, 190, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `184.8px`,
  height: `28.8px`,
  position: `absolute`,
  left: `190px`,
  top: `409px`,
});

const SignIn = styled.button({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `700`,
  fontSize: `30.000001907348633px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `105.6px`,
  height: `40.8px`,
  position: `absolute`,
  left: `90px`,
  top: `492px`,
});



const Group3 = styled.img({
  height: `50px`,
  width: `50px`,
  position: `absolute`,
  left: `480px`,
  top: `640px`,
});



const EcoBlub = styled("img")({
  height: `375px`,
  width: `375px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `786px`,
  top: `213px`,
});
const LoginPage = () => {
    const navigate=useNavigate();
  const [loginData,setLoginData] = useState({
    email:'',
    password:'',
  })
  
  
  //submit function
  const handleLoginSubmit = async(e) => {
   e.preventDefault();
  
   try{
    const response = await axios.post('http://localhost:8000/api/login',loginData);
    const {success,message} = response.data;
  
    if(success){
      navigate("/profile")
      console.log('Login Successfully')
    }
    else{
      navigate("/profile")
      console.log(message);
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
}
function MacBookAir1() {
    
      const navigate=useNavigate();
      const [loginData,setLoginData] = useState({
        email:'',
        password:'',
      })
      
      
      //submit function
      const handleLoginSubmit = async(e) => {
       e.preventDefault();
      
       try{
        const response = await axios.post('http://localhost:8000/api/login',loginData);
        const {success,message} = response.data;
      
        if(success){
          navigate("/profile")
          console.log('Login Successfully')
        }
        else{
          navigate("/profile")
          console.log(message);
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
        
        const [imageIndex, setImageIndex] = useState(0);
        const images = [EcoBlubImage,EcoBulb];
          useEffect(() => {
            // Set up an interval to toggle between two images every 5 seconds
            const intervalId = setInterval(() => {
              // Update the image index to toggle between 0 and 1
              setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
            }, 500);
        
            // Cleanup the interval when the component unmounts
            return () => clearInterval(intervalId);
          }, []);
        
        
  return (
    <MacBookAir11>
      <Frame15 src={Frame15Image} loading='lazy' alt={"Frame 15"}/>
      <Frame17 src={Frame17Image} loading='lazy' alt={"Frame 17"}/>
      <Frame18>
        <Megahertz>
          {`Megahertz`}
        </Megahertz>
        <SignInToYourAccount>
          {`Sign in to your account`}
        </SignInToYourAccount>
        <Group1>
          <Rectangle1>
          </Rectangle1>
          <Frame1>
            <Profile>
              <Group>
                <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
                <Vector1 src={Vector1Image} loading='lazy' alt={"Vector"}/>
              </Group>
            </Profile>
            <Username
               type='email'
               name='email'
               placeholder='email'
               value={loginData.email}
               onChange={handleLoginChange}
               required
            />
          </Frame1>
        </Group1>
        <Group2>
          <Rectangle11>
          </Rectangle11>
          <Vector2 src={Vector2Image} loading='lazy' alt={"Vector"}/>
          <Password
            type='password'
            name='password'
            placeholder='Password'
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
        </Group2>
        <ForgotYourPassword> <Link to ='/forgot'>ForgotYourPassword</Link>
        </ForgotYourPassword>
        <Register> <Link to ='/registration'>Register Here</Link></Register>
        <SignIn
          type='submit'
          onClick={handleLoginSubmit}
        >{`SignIn`}</SignIn>
       
        
 
      </Frame18>
      <EcoBlub src={images[imageIndex]} loading='lazy' alt={"eco blub"}/>
      <Group3 src={VectrImage} loading='lazy' alt={"Vector"}>
      </Group3>
    </MacBookAir11>);

}

export default MacBookAir1;

  