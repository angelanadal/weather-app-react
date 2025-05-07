import React, { useEffect } from "react";
import "./Search.css";
import CurrentLocationButton from "./CurrentLocationButton";
import axios from "axios";
import { fetchWeatherApi } from "openmeteo";

export default function Search({ updateFunction }) {
  function handleWeatherResponse(response, locationData) {
    updateFunction(response, locationData);
  }

  function searchCity(city) {
    let apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    let lat;
    let lon;
    axios.get(apiUrl).then((response) => {
      lat = response.data.results[0].latitude;
      lon = response.data.results[0].longitude;
      let locationData = {
        country: response.data.results[0].country_code,
        name: response.data.results[0].name,
      };
      apiUrl = `https://api.open-meteo.com/v1/forecast`;
      let params = {
        latitude: lat,
        longitude: lon,
        daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
        current: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "weather_code", "wind_speed_10m", "wind_direction_10m", "is_day"]
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
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => searchCity("Winnipeg"), []);

  function handleSearch(event) {
    event.preventDefault();
    let input = document.querySelector("#city-input");
    searchCity(input.value);
  }

  return (
    <div className="Search">
      <form className="search-bar" id="search-bar" onSubmit={handleSearch}>
        <div className="row align-items-center">
          <div className="col-6 md-8">
            <input
              type="text"
              className="text-input"
              id="city-input"
              placeholder="Enter a city..."
              autoComplete="off"
            />
          </div>
          <div className="col">
            <input
              type="submit"
              className="btn btn-primary submit-btn"
              label="Search"
              value="Search"
            />
          </div>
          <div className="col">
            <CurrentLocationButton
              handleWeatherResponse={handleWeatherResponse}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
