import React from 'react';

import PfCorrector from './components/PfCorrector';

import PfidCombiner from './components/PfidCombiner';

import PowerFactorByDevice from './components/PowerFactor';

import DeviceOn1 from './components/Devices/device1';
import DeviceOn2 from './components/Devices/device2';
import DeviceOn3 from './components/Devices/device3';
import DeviceOn4 from './components/Devices/device4';


const Profile = () => {
 
    return (
        <React.StrictMode>
        <PfCorrector/>
        <PfidCombiner/>
        <PowerFactorByDevice/>
        <DeviceOn1/>
        <DeviceOn2/>
        <DeviceOn3/>
        <DeviceOn4/>
      </React.StrictMode>
    )
  }
  
  export default Profile

