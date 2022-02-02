import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Jctech12/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Janet Choe
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Jctech12/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced in Guthub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
