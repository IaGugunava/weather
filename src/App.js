import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Forecast from './components/change-background/forecast/Forecast';
import './App.scss';
import {WEATHER_API_URL, WEATHER_API_KEY} from './api'
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForeast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForeast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));

    console.log(currentWeather);
    console.log(forecast);

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} className="search"/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
