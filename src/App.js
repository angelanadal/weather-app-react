import { useState } from "react";
import { weatherCodeMap } from "./constants";
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

  function updateData(weatherData, locationInfo) {
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
      humidity: weatherData.current.relativeHumidity2m,
      windSpeed: weatherData.current.windSpeed10m,
      feelsLike: weatherData.current.apparentTemperature,
      lastUpdated: `${day}, ${hours}:${minutes}`,
      imgSrc: `img/${weatherData.current.weatherCode}${weatherData.current.isDay ? 'd' : 'n'}.png`,
      currTemp: weatherData.current.temperature2m,
      description: weatherCodeMap[weatherData.current.weatherCode],
    });

    setCurrentLocation(locationInfo);

    let newForecastData = [];

    for (let i = 0; i < 5; i++) {
      let day = weatherData.daily.time[i];
      day = days[day.getDay()].slice(0, 3);
      let imgSrc = `img/${weatherData.daily.weatherCode[i]}d.png`;
      let condition = weatherData.daily.weatherCode[i];
      let tempRange = {
        max: weatherData.daily.temperature2mMax[i],
        min: weatherData.daily.temperature2mMin[i]
      };
      newForecastData.push({
        day,
        imgSrc,
        condition,
        tempRange,
        key: day,
      });
    }
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
              <Forecast
                forecastData={forecastData}
                useFahrenheit={useFahrenheit}
              />
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
