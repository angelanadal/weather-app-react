import React from "react";
import "./CurrentLocationButton.css";

export default function CurrentLocationButton() {
  return (
    <div className="CurrentLocationButton">
      <button className="btn btn-primary centered" id="current-loc">
        <div className="row align-items-center">
          <div className="col-2">
            <i className="fas fa-search-location fa-2x" />
          </div>
          <div className="col">
            <span>Current Location</span>
          </div>
        </div>
      </button>
    </div>
  );
}
