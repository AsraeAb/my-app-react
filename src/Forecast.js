import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Days from "./Days.js";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
    if (props.coordinates) {
      handle();
    }
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function handle() {
    const apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let units = "imperial";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayForecast);
  }

  if (ready && forecastData) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col forecast-column" key={index}>
                  <Days data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
