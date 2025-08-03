import React, { useEffect, useState } from "react";
import { getWeather } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import bgClouds from './assets/bg-clouds.jpeg';

function App() {
  const [cities, setCities] = useState([]);
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getWeather()
        .then(data => setCities(data))
        .catch(err => console.error("Error fetching weather:", err));
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return (
      <div className="login-screen">
        <h1>Login Required</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }

  return (
    <div
      className="app-wrapper"
      style={{
        backgroundImage: `url(${bgClouds})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className="header">
        <h1>Weather App</h1>
        <div className="user-info">
          <p>Welcome, {user.name}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      </header>
      <div className="cards-container">
        {cities.map((city, index) => (
          <WeatherCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
