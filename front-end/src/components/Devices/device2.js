import React, { useState } from 'react';
import BulbOnSvgrepoCom1Image from './DeviceOner_Vector.png';
import BulbOff from './bulboff.png';
import styled from 'styled-components';

const DeviceOner1 = styled("div")({
  backgroundColor: `rgba(227, 245, 255, 1)`,
  borderRadius: `16px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `202px`,
  height: `112px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  left: `320px`,
  top: `150px`,
});

const DeviceA = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `30px`,
  top: `26px`,
});

const On = styled.button({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `30px`,
  top: `56px`,
});

const BulbOnSvgrepoCom1 = styled("img")({
  height: `70px`,
  width: `70px`,
  position: `absolute`,
  left: `108px`,
  top: `22px`,
});


function DeviceOn2() {
      // Use state to manage the button state, initially set to 'On'
      const [buttonState, setButtonState] = useState('ON');
      const [imgState,setImgState]        =useState(BulbOnSvgrepoCom1Image)
      // Function to handle button click and toggle state
      const handleButtonClick = () => {
        // Toggle the button state between 'On' and 'Off'
        var button=buttonState;
        setButtonState((prevState) => (prevState === 'OFF' ? 'ON' : 'OFF'));
        setImgState((prevState) => (prevState===BulbOnSvgrepoCom1Image ? BulbOff: BulbOnSvgrepoCom1Image));


        if(button==='OFF'){
          const fetchData = async () => {
            try {
              const response = await fetch('http://192.168.18.91/on2');
              if (response.ok) {
                const data = await response.json();
                console.log('Data from server:', data);
                // Handle the data as needed
              } else {
                console.error('Error:', response.statusText);
                // Handle errors
              }
            } catch (error) {
              console.error('Error:', error.message);
              // Handle errors
            }
          };
          fetchData();
         
        }
        else{
          const fetchData = async () => {
            try {
              const response = await fetch('http://192.168.18.91/off2');
              if (response.ok) {
                const data = await response.json();
                console.log('Data from server:', data);
                // Handle the data as needed
              } else {
                console.error('Error:', response.statusText);
                // Handle errors
              }
            } catch (error) {
              console.error('Error:', error.message);
              // Handle errors
            }
          };
          fetchData();
        }
        
  };
  return (
    <DeviceOner1>
      <DeviceA>
        {`Device B`}
      </DeviceA>
      <On  onClick={handleButtonClick}>
        {buttonState}
      </On>
      <BulbOnSvgrepoCom1 src={imgState} loading='lazy' alt={"bulb-on-svgrepo-com 1"}/>
    </DeviceOner1>);

  }

export default DeviceOn2;

  