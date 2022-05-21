import React from 'react'

import styled from "styled-components";

const WeatherCondition=styled.div`
display:flex;
flex-direction:row;

`
const Condition=styled.span`
display:flex;
flex-direction:row;

`

const WeatherComponents = () => {
  return (
   <>
   <WeatherCondition>
<Condition>30 C</Condition>
   </WeatherCondition>
   </>
  )
}

export default WeatherComponents