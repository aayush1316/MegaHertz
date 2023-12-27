import React from 'react';
import  { useState,useEffect } from 'react';

import {useNavigate} from 'react-router-dom';

import EcoBlubImage from './assests/images/eco_bulb.png';

import EcoBulb from './assests/images/eco_bulb_on.png';

import styled from "styled-components";

const Reset1 = styled("div")({
  background: `linear-gradient(180deg, rgba(203, 94, 159, 1) -3.0616171314629196e-15%, rgba(222, 154, 84, 1) 99.99999999999999%)`,
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

const RenewbleEnergy = styled("img")({
  height: `382.5px`,
  width: `382.5px`,
  position: `absolute`,
  left: `840px`,
  top: `225px`,
});

const MegahertzSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kadwa`,
  fontWeight: `700`,
  fontSize: `90px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const MegahertzSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kadwa`,
  fontWeight: `700`,
  fontSize: `90px`,
  letterSpacing: `6.3px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Megahertz = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kadwa`,
  fontWeight: `700`,
  fontSize: `90px`,
  letterSpacing: `normal`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `400px`,
  top: `213px`,
});

const Frame26 = styled.button({
  backgroundColor: `rgba(0, 0, 0, 1)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `12px`,
  boxSizing: `border-box`,
  left: `519px`,
  top: `504px`,
  height: `78px`,
  width: `243px`,
});

const LetSGetStarted = styled.h1({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Kadwa`,
  fontWeight: `700`,
  fontSize: `27.000001907348633px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});


function Reset() {
    const navigate=useNavigate();
    const hello='LetSGetStarted';
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
    <Reset1>
      <RenewbleEnergy src={images[imageIndex]} loading='lazy' alt={"renewble energy"}/>
      <Megahertz>
        <MegahertzSpan1 >{`Megahert`}</MegahertzSpan1>
        <MegahertzSpan2 >{`z`}</MegahertzSpan2>
      </Megahertz>
      <Frame26  onClick={()=>{navigate("/login");}}>
        <LetSGetStarted>
          {hello}
        </LetSGetStarted>
      </Frame26>
    </Reset1>);

  }

export default Reset;

  