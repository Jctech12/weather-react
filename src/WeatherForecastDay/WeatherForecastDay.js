import moment from "moment";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <h6 className="forecast-day">
        {moment(props.forecastData[0].dt * 1000).format("ddd")}
      </h6>
      <img src={props.icon} alt="forecast-icon" />
      <section className="forecast-temp">
        <span className="max-temp">
          {Math.round(props.forecastData[0].temp.max)}{" "}
        </span>
        <span className="min-temp">
          {Math.round(props.forecastData[0].temp.min)}
        </span>
      </section>
    </div>
  );
}
