import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-bar" id="search-bar">
        <div className="row align-items-center">
          <div className="col-9 lg-10">
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
        </div>
      </form>
    </div>
  );
}
