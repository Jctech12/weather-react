import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import "./WeatherInfo.css";

export default function WeathrInfo(props) {
  return (
    <div className="WeatherInfo">
      <header>
        <h2>{props.data.city}</h2>
        <span>Last updated:</span>
        <h2 className="number">
          {props.data.date.format("dddd hh:mm")}{" "}
          <span className="ampm">{props.data.date.format("a")}</span>
        </h2>
      </header>
      <main className="overview">
        <img src={props.data.icon} alt="weather-icon" />
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
