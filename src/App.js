import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>

        <Weather defaultCity="Bern" />
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
