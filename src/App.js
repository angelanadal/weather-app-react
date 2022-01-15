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
        <div className="row">
          <div className="col centered">
            <a
              href="https://github.com/nightingaele/weather-app-react"
              rel="noreferrer"
              target="_blank"
            >
              Open-sourced on GitHub
            </a>
            <span className="footer-text"> by </span>
            <a
              href="https://www.linkedin.com/in/angela-nadal/"
              rel="noreferrer"
              target="_blank"
            >
              Angela Nadal
            </a>
            <span className="footer-text"> and hosted on </span>
            <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
              Netlify
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col centered">Icons drawn by me :)</div>
        </div>
      </div>
    </div>
  );
}
