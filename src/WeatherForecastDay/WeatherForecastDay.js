import moment from "moment";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <section className="forecast-temp">
        <h6 className="forecast-day">
          {moment(props.forecastData.dt * 1000).format("ddd")}
        </h6>
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="forecast-icon"
        />
        <div>
          <span className="max-temp">
            {Math.round(props.forecastData.temp.max)}{" "}
          </span>
          <span className="min-temp">
            {Math.round(props.forecastData.temp.min)}
          </span>
        </div>
      </section>
    </div>
  );
}
