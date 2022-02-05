import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";

export default function Weather() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.main.humidity);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
    });
  }

  useEffect(() => {
    async function fetchData() {
      const apiKey = "15b01518d9470d65eb96b19937333ceb";
      let defaultCity = "Irvine";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=imperial`;

      await axios.get(apiUrl).then(handleResponse);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <section className="search">
              <input
                type="search"
                placeholder="Type a city.."
                autoComplete="off"
              />
              <button className="search-icon btn-light">
                <FaSearch />
              </button>
            </section>
          </div>
        </form>
        <header>
          <h2>{weatherData.city}</h2>
          <span>Last updated:</span>
          <h2>{weatherData.date}</h2>
        </header>
        <main className="overview">
          <img
            src="https://openweathermap.org/img/wn/01n@2x.png"
            alt="Clear Sky"
          />
          <h3>{weatherData.description}</h3>
        </main>
        <section>
          <div className="row">
            <div className="col-6">
              <h1>
                {weatherData.temperature}
                <span className="unit">℉</span>
              </h1>
            </div>
            <div className="col-6">
              <ul className="detail">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>
                  Wind: {weatherData.wind}{" "}
                  <span className="text-lowercase">mph</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
