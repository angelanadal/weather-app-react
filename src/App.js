import { useState } from "react";
import "./App.css";
import "./colors.css";
import Search from "./Search";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

export default function App() {
  let [currentWeather, setCurrentWeather] = useState(null);
  let [currentLocation, setCurrentLocation] = useState(null);
  let [useFahrenheit, setUseFahrenheit] = useState(null);
  let [forecastData, setForecastData] = useState(null);

  function updateData(weatherInfo, locationInfo) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentTime = new Date();
    let day = days[currentTime.getDay()]; // returns a value between 0 and 6.

    let hours = currentTime.getHours();
    let minutes = String(currentTime.getMinutes()).padStart(2, "0");

    setCurrentWeather({
      humidity: weatherInfo.current.humidity,
      windSpeed: Math.round(weatherInfo.current.wind_speed * 3.6),
      feelsLike: weatherInfo.current.feels_like,
      lastUpdated: `${day}, ${hours}:${minutes}`,
      imgSrc: `img/${weatherInfo.current.weather[0].icon}.png`,
      currTemp: weatherInfo.current.temp,
      description: weatherInfo.current.weather[0].main,
    });

    setCurrentLocation(locationInfo);

    let newForecastData = [];

    weatherInfo.daily.forEach((dailyWeather) => {
      let day = new Date(dailyWeather.dt * 1000);
      day = days[day.getDay()].slice(0, 3);
      let imgSrc = `img/${dailyWeather.weather[0].icon}.png`;
      let condition = dailyWeather.weather[0].main;
      let tempRange = dailyWeather.temp;
      newForecastData.push({
        day,
        imgSrc,
        condition,
        tempRange,
      });
    });
    setForecastData(newForecastData);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="background-card second-color">
          <div className="row top-level-row">
            <div className="row top-level-row align-items-center">
              <div className="col">
                <Search updateFunction={updateData} />
              </div>
            </div>
          </div>
          <WeatherInformation
            weatherInfo={currentWeather}
            locationInfo={currentLocation}
            useFahrenheit={useFahrenheit}
            setUseFahrenheit={setUseFahrenheit}
          />
          {forecastData ? (
            <div>
              <hr />
              <Forecast />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          <div className="col centered">
            <a
              href="https://github.com/angelanadal/weather-app-react"
              rel="noreferrer"
              target="_blank"
            >
              Open-sourced on GitHub
            </a>
            <span className="footer-text"> by </span>
            <a
              href="https://www.linkedin.com/in/angela-nadal/"
              rel="noreferrer"
              target="_blank"
            >
              Angela Nadal
            </a>
            <span className="footer-text"> and hosted on </span>
            <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
              Netlify
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col centered">Icons drawn by me :)</div>
        </div>
      </div>
    </div>
  );
}
