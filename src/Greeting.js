import React, { Component } from 'react';
import logo from './logo.svg';
import './Greeting.css';

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello there new user",
      identity: "New User"
    };
  }
  render() {
    const greeter = this.state.message
    const iden = this.state.identity
    return (
      <div>
        <h3 className="greeter">{greeter}...or should I say {iden}</h3>
        <button className="iden-but" onClick={this._changeIdentity.bind(this)}>Change Identity</button>
      </div>
    )
  }
  _changeMessage() {
    const messages = ['Hello, World', 'Hello, Lifeform', 'Hello, Universe', 'Goodmoring, Hal', 'Hello, Earthling'];
    const randomMessage = messages[Math.floor((Math.random() * 5))];
    this.setState({message: randomMessage});
  }
  _changeIdentity() {
    const identities = ['Darth Vader', 'Finn', 'Han Solo', 'Jyn Esro', 'Luke Skywalker', 'Rey' ];
    let currentIdentityIndex = 0
    if (this.state.identity !== 'New User' && this.state.identity !== 'Rey') {
      currentIdentityIndex = identities.indexOf(this.state.identity)
      this.setState({identity: identities[currentIdentityIndex + 1]})
    } else {
      this.setState({identity: identities[0]})
    }
  }
  componentDidMount() {
    this._timer = setInterval( () => this._changeMessage(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
}

export default Greeting;
