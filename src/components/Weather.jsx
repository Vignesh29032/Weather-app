import React, { useState } from 'react';
import styles from './Weather.module.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);

  const getWeather = async () => {
    const apiKey = 'b90bc9c5ac687d1faf500d6ddaffe3b3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: true });
    }
  };

  return (
    <div className={styles.weatherContainer}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      <div className={styles.result}>
        {result?.cod === 200 ? (
          <>
            <h3>{result.name}, {result.sys.country}</h3>
            <p>Temperature: {result.main.temp}°C</p>
            <p>Weather: {result.weather[0].main}</p>
            <img src={`https://openweathermap.org/img/wn/${result.weather[0].icon}.png`} alt="icon" />
          </>
        ) : result?.cod ? (
          <p style={{ color: 'red' }}>City not found!</p>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
