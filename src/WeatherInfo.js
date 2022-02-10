import React from "react";
import FormattedDate from "./FormattedDate";

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
      <section>
        <div className="row">
          <div className="col-6">
            <h1>
              {props.data.temperature}
              <span className="unit">℉</span>
            </h1>
          </div>
          <div className="col-6">
            <ul className="detail">
              <li>Humidity: {props.data.humidity} %</li>
              <li>
                Wind: {props.data.wind}
                <span className="text-lowercase"> mph</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
