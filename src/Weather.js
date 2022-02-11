import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";
import WeatherForecast from "./WeatherForecast/WeatherForecast";

export default function Weather() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Irvine");
  const [unit, setUnit] = useState("imperial");

  useEffect(() => {
    search();
  }, []);

  function convertUnit() {
    let currentTemp;
    let currentWindSpeed;
    let convertedUnit;
    if (unit === "imperial") {
      //currentTemp is imperial
      //convert to metric
      currentTemp = Math.round((weatherData.temperature - 32) * (5 / 9));
      currentWindSpeed = Math.round(weatherData.wind * 1.609344);
      convertedUnit = "metric";
    } else {
      currentTemp = Math.round(weatherData.temperature * (9 / 5) + 32);
      currentWindSpeed = Math.round(weatherData.wind * 0.621371);
      convertedUnit = "imperial";
    }
    setWeatherData({
      ...weatherData,
      temperature: currentTemp,
      wind: currentWindSpeed,
      unit: convertedUnit,
    });
    setUnit(convertedUnit);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      unit: unit,
    });
  }

  async function search() {
    setLoading(true);
    const apiKey = "15b01518d9470d65eb96b19937333ceb";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    let weatherData = await axios.get(apiUrl);
    handleResponse(weatherData);
    setLoading(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <section className="search">
              <input
                type="search"
                placeholder="Type a city.."
                autoComplete="off"
                onChange={handleCityChange}
              />
              <button className="search-icon btn-light">
                <FaSearch />
              </button>
            </section>
          </div>
        </form>{" "}
        <WeatherInfo data={weatherData} convertUnit={convertUnit} />
        <WeatherForecast icon={weatherData.icon} />
      </div>
    );
  }
}
