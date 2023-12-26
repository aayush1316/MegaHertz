import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import Frame1 from './m';\
import PfCorrector from './components/PfCorrector';

import PfidCombiner from './components/PfidCombiner';

import PowerFactorByDevice from './components/PowerFactor';

//import DeviceOner from './components/Devices/device1';

const Profile = () => {
    
    // Use state to manage the button state, initially set to 'On'
    const [buttonState, setButtonState] = useState('On');
  
    // Function to handle button click and toggle state
    const handleButtonClick = () => {
      // Toggle the button state between 'On' and 'Off'
      var button=buttonState;
      setButtonState((prevState) => (prevState === 'On' ? 'Off' : 'On'));

      const link = document.createElement('a');
      if(button==='On'){
        link.href = 'http://192.168.18.91/on1'; // the link to on the relay
        link.target = '_blank';
        button='Off';
      }
      else{
        link.href="http://192.168.18.91/off1";
        link.target = '_blank';
        button='On';
      }
       // Open in a new tab or window
      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click event on the link
      link.click();
      
      // Remove the link from the document (optional)
      document.body.removeChild(link);
      
};
 
    return (
        <React.StrictMode>
        <button onClick={handleButtonClick}>{buttonState}</button>
        <PfCorrector/>
        <PfidCombiner/>
        <PowerFactorByDevice/>
        
        
      </React.StrictMode>
    )
  }
  
  export default Profile

