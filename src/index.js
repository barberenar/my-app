import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <h2 className="appName shadow-sm p-3 mb-5 bg-white rounded">
        The Weather App
      </h2>
      <WeatherApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
