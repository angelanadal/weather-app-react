import React from "react";
import LocationInfo from "./LocationInfo";
import "./WeatherInformation.css";

export default function WeatherInformation() {
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
  let weatherInfo = {
    cityName: "Winnipeg",
    countryCode: "CA",
    humidity: 73,
    windSpeed: 7,
    feelsLike: -18,
    lastUpdated: `${day}, ${hours}:${minutes}`,
    imgSrc: "https://angela-weather-app.netlify.app/img/04n.png",
    currTemp: -13,
    description: "Overcast clouds",
  };
  return (
    <div className="WeatherInformation">
      <div className="row top-level-row">
        <div className="col">
          <LocationInfo
            name={weatherInfo.cityName}
            country-code={weatherInfo.countryCode}
          />
          <br />
          <div id="humidity">
            Humidity: <span id="current-humidity">{weatherInfo.humidity}%</span>
          </div>
          <div id="wind-speed">
            Wind:{" "}
            <span id="current-wind-speed">{weatherInfo.windSpeed} km/h</span>
          </div>
          <div id="feels-like">
            Feels like:{" "}
            <span id="current-wind-chill">{weatherInfo.feelsLike}°C</span>
          </div>
          <br />
          <div id="last-updated">
            Last updated:{" "}
            <span id="current-time">{weatherInfo.lastUpdated}</span>
          </div>
        </div>
        <div className="col-3" />
        <div className="col">
          <div className="row">
            <div className="col no-padding">
              <img
                className="icon centered-img"
                id="current-weather-icon"
                src={weatherInfo.imgSrc}
                alt={weatherInfo.description}
              />
            </div>
            <div className="col align-self-center">
              <div className="row no-gutters">
                <div className="col no-padding centered">
                  <span id="current-temp">{weatherInfo.currTemp}</span>
                </div>
                <div className="col align-self-center">
                  <span className="temp-units">
                    <a href="/" id="celsius-link" className="active">
                      °C
                    </a>{" "}
                    /
                    <a href="/" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="centered" id="description">
                {weatherInfo.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
