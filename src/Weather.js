import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";

export default function Weather() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Irvine");

  useEffect(() => {
    async function fetchData() {
      const apiKey = "15b01518d9470d65eb96b19937333ceb";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

      let weatherData = await axios.get(apiUrl);
      handleResponse(weatherData);
      setLoading(false);
    }
    fetchData();
  }, []);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  async function search() {
    setLoading(true);
    const apiKey = "15b01518d9470d65eb96b19937333ceb";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

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
        <WeatherInfo data={weatherData} />
      </div>
    );
  }
}
