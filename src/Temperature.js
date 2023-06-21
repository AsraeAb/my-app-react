import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function handleConvert() {
    return (props.imperial - 32) * (5 / 9);
  }
  if (unit === "imperial") {
    return (
      <div className="Temperature">
        <span className="current-temp-number">
          {Math.round(props.imperial)}{" "}
          <span className="degree">
            {" "}
            <strong>°F </strong>|{" "}
            <a
              href="/"
              title="Celsius Temperature"
              rel="noopener noreferrer"
              onClick={showMetric}
            >
              °C
            </a>{" "}
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="current-temp-number">
          {Math.round(handleConvert())}{" "}
          <span className="degree">
            <a
              href="/"
              title="Fahrenheit Temperature"
              rel="noopener noreferrer"
              onClick={showImperial}
            >
              °F{" "}
            </a>
            | <strong>°C </strong>
          </span>
        </span>
      </div>
    );
  }
}
