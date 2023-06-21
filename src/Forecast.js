import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Days from "./Days.js";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    let city = props.city;
    const apiKey = "2daf65f0cdaa917f11026e8a128ce271";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    setReady(false);
    axios.get(apiUrl).then(displayForecast);
  }, [props.city]);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
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
