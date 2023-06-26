import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>

        <Weather defaultCity="Bern" />
      </header>
      <br />
      <footer>
        <div style={{ marginTop: "1px", fontSize: "0.6rem" }}>
          <a
            style={{ color: "#FFEBBB", display: "inline-block" }}
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AsraeAb/my-app-react/tree/master"
          >
            Open-source code
          </a>
          <span
            style={{
              color: "#FFEBBB",
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            {" "}
            by Asrae
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
