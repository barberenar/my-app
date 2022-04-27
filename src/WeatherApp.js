import React from "react";
import SearchBox from "./SearchBox";
import Header from "./Header";
import Forecast from "./Forecast";

export default function WeatherApp() {
  return (
    <div className="App">
      <SearchBox />
      <Header />
      <Forecast />
    </div>
  );
}
