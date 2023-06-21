import React from "react";
import FormatedDate from "./FormatedDate";
import Temperature from "./Temperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city-output">{props.data.city}</h2>
      <div className="row">
        <div className="col-4">
          <img
            src={props.data.icon}
            alt={props.data.description}
            description={props.data.description}
            className="current-weather-icon"
          />
        </div>
        <div className="col-4 temp-box">
          <Temperature imperial={props.data.temperature} />
        </div>
        <div className="col-4 properties-box">
          <div className="current-props">
            <div>
              Wind:{" "}
              <a href="/" title="Wind Speed" rel="noopener noreferrer">
                {" "}
                {Math.round(props.data.wind)} mph
              </a>
            </div>
            <div>
              Humidity:{" "}
              <a href="/" title="Humidity" rel="noopener noreferrer">
                {props.data.humidity}%
              </a>
            </div>
            <div>
              Visibility:{" "}
              <a
                href="/"
                title="Visibility"
                rel="noopener noreferrer"
                className="description"
              >
                {props.data.description}
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="current-time">
            <span>
              Your local day and time is:{" "}
              <FormatedDate date={props.data.date} />
            </span>
          </h3>
        </div>
      </div>{" "}
    </div>
  );
}
