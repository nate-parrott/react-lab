// This is the main file that gets called when you do "npm start"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // import what was written in App.js file
import './index.css';

ReactDOM.render(
  <App />, // "render" what App.js specifies
  document.getElementById('root')
);
