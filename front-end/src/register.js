import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Vector1Image from './assests/imgr/Vector1.png';

import Frame17Image from './assests/imgr/Frame_17.png';

import EcoBlubImage from './assests/imgr/eco_bulb.png';

import VectorImage from './assests/imgr/Vector6.png';

import Vector2Image from './assests/imgr/Vector5.png';

import Vector3Image from './assests/imgr/Vector4.png';

import IconsImage from './assests/imgr/Icons.png';

import Vector4Image from './assests/imgr/Vector5.png';

import styled from "styled-components";

const CreateAccount1 = styled("div")({
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

const Frame20 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `375px`,
  height: `375px`,
  left: `786px`,
  top: `213px`,
});

const EcoBlub = styled("img")({
  height: `375px`,
  width: `375px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame19 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `390px`,
  height: `540.8px`,
  left: `271px`,
  top: `146px`,
});

const CreateAccount2 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `700`,
  fontSize: `39px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `267.8px`,
  height: `53.3px`,
  position: `absolute`,
  left: `61px`,
  top: `0px`,
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
  width: `390px`,
  height: `65px`,
  left: `0px`,
  top: `108px`,
});

const Rectangle1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 10.399999618530273px 26px rgba(0, 0, 0, 0.1)`,
  borderRadius: `52px`,
  width: `390px`,
  height: `65px`,
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
  width: `185.9px`,
  height: `31.2px`,
  left: `18px`,
  top: `17px`,
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
  width: `31.2px`,
  height: `31.2px`,
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
  width: `18.44px`,
  height: `23.4px`,
  left: `5px`,
  top: `3px`,
});

const Vector = styled("img")({
  height: `11.63px`,
  width: `11.63px`,
  position: `absolute`,
  left: `3px`,
  top: `0px`,
});

const Vector2 = styled("img")({
  height: `7.35px`,
  width: `18.44px`,
  position: `absolute`,
  left: `0px`,
  top: `16px`,
});

const Username = styled.input({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(200, 200, 200, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `19.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `149.5px`,
  height: `23.4px`,
  position: `absolute`,
  left: `35px`,
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
  width: `390px`,
  height: `65px`,
  left: `0px`,
  top: `228px`,
});

const Rectangle11 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 10.399999618530273px 26px rgba(0, 0, 0, 0.1)`,
  borderRadius: `52px`,
  width: `390px`,
  height: `65px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector3 = styled("img")({
  height: `22.75px`,
  width: `18.2px`,
  position: `absolute`,
  left: `23px`,
  top: `18px`,
});

const Password = styled.input({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(200, 200, 200, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `400`,
  fontSize: `19.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `149.5px`,
  height: `22.1px`,
  position: `absolute`,
  left: `59px`,
  top: `18px`,
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
  width: `390px`,
  height: `65px`,
  left: `0px`,
  top: `347px`,
});

const Rectangle12 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 10.399999618530273px 26px rgba(0, 0, 0, 0.1)`,
  borderRadius: `52px`,
  width: `390px`,
  height: `65px`,
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
  fontSize: `19.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `149.5px`,
  height: `22.1px`,
  position: `absolute`,
  left: `59px`,
  top: `18px`,
});

const Email = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `18.2px`,
  height: `14.56px`,
  left: `23px`,
  top: `25px`,
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
  width: `18.2px`,
  height: `14.56px`,
  left: `0px`,
  top: `0px`,
});

const Icons = styled("img")({
  height: `14.56px`,
  width: `18.2px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Create = styled.button({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(38, 38, 38, 1)`,
  fontStyle: `normal`,
  fontFamily: `Lato`,
  fontWeight: `700`,
  fontSize: `32.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `114.4px`,
  height: `44.2px`,
  position: `absolute`,
  left: `203px`,
  top: `497px`,
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
  width: `72.8px`,
  height: `44.2px`,
  left: `317px`,
  top: `497px`,
});

const Rectangle2 = styled("div")({
  background: `linear-gradient(121.26deg, rgba(249, 119, 148, 1) -2.880907317655319e-15%, rgba(98, 58, 162, 1) 100%)`,
  borderRadius: `22.100000381469727px`,
  width: `72.8px`,
  height: `44.2px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector4 = styled("img")({
  height: `23.4px`,
  width: `23.4px`,
  position: `absolute`,
  left: `71px`,
  top: `57px`,
});


function CreateAccount() {
    
     const [registrationData,setRegistrationData] = useState({
            username:'',
            email:'',
            password:''
    })
    
    
    const handleRegistrationChange = (e) => {
    const {name,value} = e.target;
    
    setRegistrationData((prevData) => ({
        ...prevData,
        [name] : value,
    }))
    
    }
    
    const handleRegistrationSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:8000/api/signup',registrationData);
        console.log(response.data);
    }
    catch(error){
        console.log(error)
    }
    setRegistrationData({
        username:'',
        email:'',
        password:'',
    })
   }
  return (
    <CreateAccount1>
      <Frame15>
        <Vector1 src={Vector1Image} loading='lazy' alt={"Vector 1"}/>
      </Frame15>
      <Frame17 src={Frame17Image} loading='lazy' alt={"Frame 17"}/>
      <Frame20>
        <EcoBlub src={EcoBlubImage} loading='lazy' alt={"eco blub"}/>
      </Frame20>
      <Frame19>
        <CreateAccount2>
          {`Create account`}
        </CreateAccount2>
        <Group1>
          <Rectangle1>
          </Rectangle1>
          <Frame1>
            <Profile>
              <Group>
                <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
                <Vector2 src={Vector2Image} loading='lazy' alt={"Vector"}/>
              </Group>
            </Profile>
            <Username
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={registrationData.username}
                    onChange={handleRegistrationChange}
                    required
            />
          </Frame1>
        </Group1>
        <Group2>
          <Rectangle11>
          </Rectangle11>
          <Vector3 src={Vector3Image} loading='lazy' alt={"Vector"}/>
          <Password
                type='password'
                name='password'
                placeholder='Password'
                value={registrationData.password}
                onChange={handleRegistrationChange}
                required
          />
        </Group2>
        <Group4>
          <Rectangle12>
          </Rectangle12>
          <EMail
            type='email'
            name='email'
            placeholder='email'
            value={registrationData.email}
            onChange={handleRegistrationChange}
            required            
          />
          <Email>
            <Layer2>
              <Icons src={IconsImage} loading='lazy' alt={"Icons"}/>
            </Layer2>
          </Email>
        </Group4>
        <Create type='button' onClick={handleRegistrationSubmit}>
          {`Create`}
        </Create>
       
        <Group3>
          <Rectangle2>
          </Rectangle2>
          <Vector4 src={Vector4Image} loading='lazy' alt={"Vector"}/>
        </Group3>
      </Frame19>
    </CreateAccount1>);

  }

export default CreateAccount;
