import { useState, useEffect } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = process.env.REACT_APP_API_KEY;
            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Toronto&aqi=yes`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data.current.condition.text);
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
