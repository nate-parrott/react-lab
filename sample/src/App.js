// This file dictates what shows up on your localhost browser

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // HTML language below
      // <h2> is big text, <p> is normal text
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App; // this can later be imported in index.js file
