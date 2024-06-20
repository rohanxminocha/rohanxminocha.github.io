import { useState, useEffect } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = process.env.REACT_APP_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.6&lon=79.3&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                const weatherCondition = data.weather[0].main;
                setWeather(weatherCondition);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setWeather('Unknown');
            }
        };

        fetchWeather();
        const interval = setInterval(fetchWeather, 3600000);
        return () => clearInterval(interval);
    }, []);
    
    return weather;
};

export default Weather;
