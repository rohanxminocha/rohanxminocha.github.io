import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Snowfall from 'react-snowfall';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rain from './components/Rain';
import Weather from './components/api/Weather';
import App from './App';

ReactGA.initialize('UA-145825675-1');
ReactGA.pageview('/');

const WeatherAnimation = () => {
  const weather = Weather();

  return (
    <React.StrictMode>
      <div>
        <App />
        {weather === 'Snow' && <Snowfall color='#f0eae4' snowflakeCount={100} radius={[1.0, 10.0]} />}
        {weather === 'Rain' && <Rain color='#5c4033' />}
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<WeatherAnimation />, document.getElementById('root'));
