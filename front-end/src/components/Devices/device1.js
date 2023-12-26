import React from 'react';

import VectorImage from './DeviceOner_Vector.png';


import styled from "styled-components";


const DeviceOner1 = styled("div")({
  backgroundColor: `rgba(227, 245, 255, 1)`,
  borderRadius: `16px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `202px`,
  height: `112px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
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

const On = styled("div")({
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

const BulbOnSvgrepoCom1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `70px`,
  height: `70px`,
  left: `108px`,
  top: `22px`,
  overflow: `hidden`,
});

const Vector = styled("img")({
  height: `40.83px`,
  width: `29.17px`,
  position: `absolute`,
  left: `20px`,
  top: `20px`,
});


function DeviceOner() {
  return (
    <DeviceOner1>
      <DeviceA>
        {`Device D`}
      </DeviceA>
      <On>
        {`ON`}
      </On>
      <BulbOnSvgrepoCom1>
        <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
      </BulbOnSvgrepoCom1>
    </DeviceOner1>);

  }

export default DeviceOner;

  