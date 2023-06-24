import React from "react";
import Icons from "./Icons";
export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day mb-2">{day()} </div>
      <Icons icon={props.data.weather[0].icon} size={30} />{" "}
      <div className="WeatherForecast-temperatures mt-2">
        <span className="WeatherForecast-temperature-max">{max()}</span>
        <span>/</span>
        <span className="WeatherForecast-temperature-min">{min()}</span>
      </div>
    </div>
  );
}
