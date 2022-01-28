import React from "react";
import "./LocationInfo.css";
import Flags from "country-flag-icons/react/3x2";

export default function LocationInfo({ name, countryCode }) {
  function generateFlag(flagCode) {
    let newFlagCode = "CA";
    if (flagCode) {
      newFlagCode = flagCode;
    }
    const Flag = Flags[newFlagCode];
    return <Flag />;
  }
  return (
    <div className="LocationInfo">
      <div className="row align-items-center">
        <div className="col-2">{generateFlag(countryCode)}</div>
        <div className="col">
          <span id="current-city">{name}</span>
        </div>
      </div>
    </div>
  );
}
