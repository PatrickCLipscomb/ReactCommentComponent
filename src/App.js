import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      now: new Date(),
      timeSpent: 0,
    }
  }
  render() {
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
          keep in mind the current time: {this.state.now.toTimeString()}
        </p>
        <p>Elapsed Time: {this.state.timeSpent}</p>
        <ul className="languages">
          {languageOptions.map( language => <li>{language}</li>)}
        </ul>
        <h2>This is a toolbox app, it has useful stuff</h2>
      </div>
    );
  }
  _updateTime() {
    this.setState({now: new Date()});
  }
  _updateElapser() {
    this.setState({timeSpent: this.state.timeSpent + 1});
  }
  componentDidMount() {
    this._timer = setInterval(() => this._updateTime(), 1000)
    this._elapser = setInterval(() => this._updateElapser(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this._timer)
    clearInterval(this._elapser)
  }
}

export default App;
