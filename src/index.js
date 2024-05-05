import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Snowfall from 'react-snowfall';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rain from './Rain'
import App from './App';

ReactGA.initialize('UA-145825675-1');
ReactGA.pageview('/');

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: '#282c34', position: 'relative' }}>
      <App />
      <Snowfall color='#f0eae4' snowflakeCount={200} radius={[1.0, 10.0]} />
      <Rain color='#5c4033'/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
