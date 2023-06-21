import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Days from "./Days.js";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function load() {
    let city = props.city;
    const apiKey = "0a2c2733of6f535f4bbc5b14t3c60ea9";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayForecast);
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
    load();
    return null;
  }
}
