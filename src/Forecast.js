import React from "react";
import ForecastCard from "./ForecastCard";

export default function Forecast({ forecastData, useFahrenheit }) {
  return (
    <div className="Forecast">
      <div className="row top-level-row" id="forecast">
        {forecastData.map((dailyWeather) => {
          return (
            <div className="col centered">
              <ForecastCard
                day={dailyWeather.day}
                img={dailyWeather.imgSrc}
                condition={dailyWeather.condition}
                tempRange={dailyWeather.tempRange}
                useFahrenheit={useFahrenheit}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
