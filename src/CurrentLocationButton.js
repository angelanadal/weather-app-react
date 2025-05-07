import React from "react";
import axios from "axios";

import "./CurrentLocationButton.css";
import { fetchWeatherApi } from "openmeteo";

export default function CurrentLocationButton({ handleWeatherResponse }) {
  function handleClickLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=geocodejson`;
      axios.get(apiUrl).then((response) => {
        let locationData = {
          country: response.data.features[0].properties.geocoding.country_code.toUpperCase(),
          name: response.data.features[0].properties.geocoding.city,
        };
        apiUrl = `https://api.open-meteo.com/v1/forecast`;
        let params = {
          latitude: latitude,
          longitude: longitude,
          daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
          current: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "weather_code", "wind_speed_10m", "wind_direction_10m"]
        }
        fetchWeatherApi(apiUrl, params)
          .then((weatherResponse) => {
            weatherResponse = weatherResponse[0];
            const utcOffsetSeconds = weatherResponse.utcOffsetSeconds();
            let current = weatherResponse.current();
            let daily = weatherResponse.daily();
            let weatherData = {
              current: {
                time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                temperature2m: current.variables(0).value(),
                relativeHumidity2m: current.variables(1).value(),
                apparentTemperature: current.variables(2).value(),
                weatherCode: current.variables(3).value(),
                windSpeed10m: current.variables(4).value(),
                windDirection10m: current.variables(5).value(),
                isDay: current.variables(6).value(),
              },
              daily: {
                time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
                  (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
                ),
                weatherCode: daily.variables(0).valuesArray(),
                temperature2mMax: daily.variables(1).valuesArray(),
                temperature2mMin: daily.variables(2).valuesArray(),
              },
            };
            handleWeatherResponse(weatherData, locationData)
      });
          });
    });
  }

  return (
    <div className="CurrentLocationButton">
      <button
        className="btn btn-primary centered"
        id="current-loc"
        onClick={handleClickLocation}
      >
        <div className="row align-items-center">
          <div className="col-1 col-sm-12 col-md-1">
            <i className="fas fa-search-location fa-1x" />
          </div>
          <div className="col">
            <span>Current Location</span>
          </div>
        </div>
      </button>
    </div>
  );
}
