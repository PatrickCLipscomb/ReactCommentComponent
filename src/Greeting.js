import React, { Component } from 'react';
import logo from './logo.svg';
import './Greeting.css';

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello there new user"
    };
  }
  render() {
    const greeter = this.state.message
    return (
      <div>
        <h3 className="greeter">{greeter}</h3>
      </div>
    )
  }
  _changeMessage() {
    const messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe', 'Goodmoring, Hal', 'Hello, Earthling'];
    const randomMessage = messages[Math.floor((Math.random() * 5))];
    this.setState({message: randomMessage});
  }
  componentDidMount() {
    this._timer = setInterval( () => this._changeMessage(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
}

export default Greeting;
