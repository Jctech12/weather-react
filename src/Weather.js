import React from "react";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";

export default function Weather() {
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
        <h2>Irvine</h2>
        <span>Last updated:</span>
        <h2>Wednesday 19:13</h2>
      </header>
      <section className="overview">
        <img
          src="https://openweathermap.org/img/wn/01n@2x.png"
          alt="Clear Sky"
        />
        <h3>Clear Sky</h3>
      </section>
      <section>
        <div className="row">
          <div className="col-6">
            <h1>14℃</h1>
          </div>
          <div className="col-6">
            <ul className="detail">
              <li>Precipitation: 15%</li>
              <li>Humiditiy: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
