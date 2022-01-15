import "./App.css";
import "./colors.css";
import CurrentLocationButton from "./CurrentLocationButton";
import Search from "./Search";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background-card second-color">
          <div className="row top-level-row">
            <div className="row top-level-row align-items-center">
              <div className="col-3 centered">
                <CurrentLocationButton />
              </div>
              <div className="col">
                <Search />
              </div>
            </div>
          </div>
          <WeatherInformation />
          <hr />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
