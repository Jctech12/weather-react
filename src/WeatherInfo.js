import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature/WeatherTemperature";

export default function WeathrInfo(props) {
  return (
    <div className="WeatherInfo">
      <header>
        <h2>{props.data.city}</h2>
        <span>Last updated:</span>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
      </header>
      <main className="overview">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt="weather-icon"
        />
        <h3>{props.data.description}</h3>
      </main>
      <WeatherTemperature
        convertUnit={props.convertUnit}
        unit={props.data.unit}
        temperature={props.data.temperature}
        humidity={props.data.humidity}
        wind={props.data.wind}
      />
    </div>
  );
}
