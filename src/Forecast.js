import React from "react";
import ForecastCard from "./ForecastCard";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row top-level-row" id="forecast">
        <div className="col centered">
          <ForecastCard
            day="Mon"
            img="https://angela-weather-app.netlify.app/img/13d.png"
            condition="Snow"
            tempRange={{ max: -7, min: -22 }}
          />
        </div>
        <div className="col centered">
          <ForecastCard
            day="Tue"
            img="https://angela-weather-app.netlify.app/img/13d.png"
            condition="Snow"
            tempRange={{ max: -17, min: -26 }}
          />
        </div>
        <div className="col centered">
          <ForecastCard
            day="Wed"
            img="https://angela-weather-app.netlify.app/img/03d.png"
            condition="Cloudy"
            tempRange={{ max: -25, min: -32 }}
          />
        </div>
        <div className="col centered">
          <ForecastCard
            day="Thu"
            img="https://angela-weather-app.netlify.app/img/04d.png"
            condition="Very cloudy"
            tempRange={{ max: -26, min: -33 }}
          />
        </div>
        <div className="col centered">
          <ForecastCard
            day="Fri"
            img="https://angela-weather-app.netlify.app/img/03d.png"
            condition="Cloudy"
            tempRange={{ max: -26, min: -35 }}
          />
        </div>
      </div>
    </div>
  );
}
