import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState("");

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={(event) => props.handleSubmit(event, city)}>
        <section className="search">
          <input
            type="search"
            placeholder="Type a city.."
            autoComplete="off"
            onChange={handleCityChange}
          />
          <div className="search-bar">
            <button className="search-icon btn-light">
              <FaSearch />
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
