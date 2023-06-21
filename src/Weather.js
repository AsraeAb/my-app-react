import React, { useState } from "react";

import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);

  let [loaded, setLoaded] = useState({ ready: false });

  function showWeather(response) {
    setLoaded({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCall();
  }

  function handleCall() {
    let apiKey = "e880e48179885be1b51452f8ef1b39be";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded.ready) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city.."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-sm-3 mt-2 mt-sm-0 ps-sm-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-grey-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={loaded} />
        <hr />
        <Forecast coordinates={loaded.coordinates} />
      </div>
    );
  } else {
    handleCall();
    return null;
  }
}
