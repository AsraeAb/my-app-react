import React from "react";

export default function Days(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="DayColumn">
      {" "}
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          className="forecast-icon"
          description={props.data.condition.icon}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="forecast-day">{day()}</div>
      <span className="temp-min">
        {Math.round(props.data.temperature.minimum)}°
      </span>{" "}
      -{" "}
      <span className="temp-max">
        {Math.round(props.data.temperature.maximum)}°
      </span>
    </div>
  );
}
