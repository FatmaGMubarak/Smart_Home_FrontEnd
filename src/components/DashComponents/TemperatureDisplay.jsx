import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function TemperatureDisplay() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const users = useSelector((state) => state.user.user);
  const city = users?.home?.address.split(",")[0]
  const api = {
    key: process.env.VITE_TEMPERATURE_KEY,
    base: process.env.VITE_Temperature_URL,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      try {
        const response = await axios.get(`${api.base}weather`, {
          params: {
            q: city,
            appid: api.key,   
            units: 'metric',  
          },
        });

        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, api.key, api.base]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className="text-3xl font-normal">
        {weatherData?.main?.temp?.toFixed(1)}<sup className="text-1xl font-light">°C</sup>
      </p>
    </div>
  );
}
