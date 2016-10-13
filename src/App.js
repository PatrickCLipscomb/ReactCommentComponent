import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const now = new Date();
    const languageOptions = ['Javascript', 'JSX', 'React']
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Patrick, Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="current-time">
          keep in mind the current time: {now.toTimeString()}
        </p>
        <ul className="languages">
          {languageOptions.map( language => <li>{language}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
