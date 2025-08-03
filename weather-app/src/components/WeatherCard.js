import React from "react";
import "./WeatherCard.css";

const getCardColor = (weatherMain) => {
  switch (weatherMain?.toLowerCase()) {
    case "clear":
      return "#27ae60"; // green
    case "clouds":
      return "#2980b9"; // blue
    case "rain":
    case "drizzle":
      return "#f39c12"; // orange
    case "snow":
      return "#bdc3c7"; // light gray
    case "mist":
    case "fog":
      return "#95a5a6"; // gray
    default:
      return "#34495e"; // default dark
  }
};

const WeatherCard = ({ city }) => {
  const weather = city.weather?.[0]?.description || "";
  const icon = city.weather?.[0]?.icon;
  const weatherMain = city.weather?.[0]?.main;
  const temp = city.main?.temp;
  const min = city.main?.temp_min;
  const max = city.main?.temp_max;
  const pressure = city.main?.pressure;
  const humidity = city.main?.humidity;
  const visibility = city.visibility / 1000;
  const wind = city.wind;
  const sunrise = new Date(city.sys?.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(city.sys?.sunset * 1000).toLocaleTimeString();

  const cardStyle = {
    backgroundColor: getCardColor(weatherMain),
  };

  return (
    <div className="weather-card" style={cardStyle}>
      <h2>{city.name}, {city.sys?.country}</h2>
      <p className="weather-time">{new Date(city.dt * 1000).toLocaleTimeString()}, {new Date(city.dt * 1000).toLocaleDateString()}</p>
      <div className="weather-main">
        <div className="weather-icon-desc">
          {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />}
          <p className="weather-status">{weather}</p>
        </div>
        <div className="weather-temp">{Math.round(temp)}°C</div>
        <div className="weather-minmax">Min: {Math.round(min)}°C | Max: {Math.round(max)}°C</div>
      </div>
      <div className="weather-metrics">
        <p><strong>Pressure:</strong> {pressure} hPa</p>
        <p><strong>Humidity:</strong> {humidity}%</p>
        <p><strong>Visibility:</strong> {visibility} km</p>
        <p><strong>Wind:</strong> {wind?.speed} m/s {wind?.deg}°</p>
        <p><strong>Sunrise:</strong> {sunrise}</p>
        <p><strong>Sunset:</strong> {sunset}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
