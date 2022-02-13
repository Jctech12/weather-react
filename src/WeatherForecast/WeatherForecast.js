import { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "../WeatherForecastDay/WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loading, setLoading] = useState(true);
  let [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    forecastSearch();
  }, []);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
  }

  async function forecastSearch() {
    setLoading(true);
    const apiKey = "15b01518d9470d65eb96b19937333ceb";
    let latitude = props.coordinates.lat;
    let longtitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=imperial`;
    let forecastData = await axios.get(apiUrl);
    handleResponse(forecastData);
    setLoading(false);
  }

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-4">
            <WeatherForecastDay forecastData={forecastData} icon={props.icon} />
          </div>
        </div>
      </div>
    );
  }
}
