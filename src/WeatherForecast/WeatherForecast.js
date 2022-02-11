import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-4">
          <h6 className="forecast-day">Sat</h6>
          <img src={props.icon} alt="forecast-icon" />
          <section className="forecast-temp">
            <span className="max-temp">19 </span>
            <span className="min-temp">10</span>
          </section>
        </div>
        <div className="col-4">
          <h6 className="forecast-day">Sat</h6>
          <img src={props.icon} alt="forecast-icon" />
          <section className="forecast-temp">
            <span className="max-temp">19 </span>
            <span className="min-temp">10</span>
          </section>
        </div>
        <div className="col-4">
          <h6 className="forecast-day">Sat</h6>
          <img src={props.icon} alt="forecast-icon" />
          <section className="forecast-temp">
            <span className="max-temp">19 </span>
            <span className="min-temp">10</span>
          </section>
        </div>
      </div>
    </div>
  );
}
