
import CityComponents from './Components/CityComponents';
import WeatherComponents from './Components/WeatherComponents';
import styled from 'styled-components';
import Axios from "axios";
import React, { useState } from "react";

const API_KEY="6782aa2ff94403f156771ee7bab31bea"
export const WeatherIcons = {
  "01d": "/weather/icons/sunny.svg",
  "01n": "/weather/icons/night.svg",
  "02d": "/weather/icons/day.svg",
  "02n": "/weather/icons/cloudy-night.svg",
  "03d": "/weather/icons/cloudy.svg",
  "03n": "/weather/icons/cloudy.svg",
  "04d": "/weather/icons/perfect-day.svg",
  "04n": "/weather/icons/cloudy-night.svg",
  "09d": "/weather/icons/rain.svg",
  "09n": "/weather/icons/rain-night.svg",
  "10d": "/weather/icons/rain.svg",
  "10n": "/weather/icons/rain-night.svg",
  "11d": "/weather/icons/storm.svg",
  "11n": "/weather/icons/storm.svg",
};
const Container =styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background:white;
font-family:Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6782aa2ff94403f156771ee7bab31bea`,
    );
    updateWeather(response.data);
  };
  return (
   <>
      <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponents weather={weather} city={city} />
      ) : (
        <CityComponents updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
        <AppLabel>©SukhdebPatra</AppLabel>
    </Container>
  
   
   </>
  );
}

export default App;
