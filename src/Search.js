import React from "react";
import "./Search.css";
import CurrentLocationButton from "./CurrentLocationButton";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-bar" id="search-bar">
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
            <CurrentLocationButton />
          </div>
        </div>
      </form>
    </div>
  );
}
