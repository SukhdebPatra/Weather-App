
import CityComponents from './Components/CityComponents';
import WeatherComponents from './Components/WeatherComponents';
import styled from 'styled-components';

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

const AppLabel=styled.span`
color:red;
font-size:18px;
font-weight:Bold
`;


function App() {
  return (
   <>
   <Container>
    <AppLabel> React  Weather App      </AppLabel>
    <CityComponents/>
   <WeatherComponents/>
   </Container>
   
   
   </>
  );
}

export default App;
