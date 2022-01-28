import React from "react";
import "./ForecastCard.css";
import { convertToFahrenheit } from "./constants";

export default function ForecastCard({
  day,
  img,
  condition,
  tempRange,
  useFahrenheit,
}) {
  return (
    <div className="ForecastCard">
      <div className="row align-items-center">
        <div className="col">
          <div className="align-self-center">
            <span className="day-text">{day}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="align-self-center">
            <img
              className="icon centered-img forecast-img"
              src={img}
              alt={condition}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="temp-range">
            <strong>
              {useFahrenheit
                ? Math.round(convertToFahrenheit(tempRange.max))
                : Math.round(tempRange.max)}
              °
            </strong>{" "}
            |{" "}
            {useFahrenheit
              ? Math.round(convertToFahrenheit(tempRange.min))
              : Math.round(tempRange.min)}
            °
          </span>
        </div>
      </div>
    </div>
  );
}
