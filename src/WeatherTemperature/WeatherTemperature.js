import React, { useEffect, useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [tempUnit, setTempUnit] = useState("℉");
  const [windUnit, setWindUnit] = useState("mph");

  useEffect(() => {
    if (props.unit === "imperial") {
      setTempUnit("℉");
      setWindUnit("mph");
    } else {
      setTempUnit("℃");
      setWindUnit("km/h");
    }
  }, []);

  function toggleUnit(event) {
    event.preventDefault();
    let updatedTempUnit;
    let updatedWindUnit;

    if (props.unit === "imperial") {
      updatedTempUnit = "℃";
      updatedWindUnit = "km/h";
    } else {
      updatedTempUnit = "℉";
      updatedWindUnit = "mph";
    }
    setTempUnit(updatedTempUnit);
    setWindUnit(updatedWindUnit);
    props.convertUnit();
  }

  return (
    <section className="WeatherTemperature">
      {props.unit === "imperial" ? (
        <h5 className="units">
          <a id="unit-link" href="/" onClick={toggleUnit}>
            ℃{" "}
          </a>
          <span>|</span> ℉
        </h5>
      ) : (
        <h5 className="units">
          ℃ <span>|</span>{" "}
          <a id="unit-link" href="/" onClick={toggleUnit}>
            ℉{" "}
          </a>
        </h5>
      )}
      <div className="row">
        <div className="col-6">
          <h1 className="number">
            {props.temperature}
            <span>{tempUnit}</span>
          </h1>
        </div>
        <div className="col-6">
          <ul className="detail">
            <li>
              Humidity: <span className="number">{props.humidity} </span>%
            </li>
            <li>
              Wind: <span className="number">{props.wind}</span>
              <span className="text-lowercase"> {windUnit}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
