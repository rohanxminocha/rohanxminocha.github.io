import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Snowfall from 'react-snowfall';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactGA.initialize('UA-145825675-1');
ReactGA.pageview('/');

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: '#282c34', position: 'relative' }}>

      <Snowfall color='#f0eae4' snowflakeCount={200} radius={[1.0, 10.0]} />

      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
