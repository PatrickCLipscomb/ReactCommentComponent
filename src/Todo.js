import React, { Component } from 'react';
import logo from './logo.svg';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      text: ''
    }
  }
  render() {
    return (
      <div className="list-items">
        <h3>Imagine you have things to do...</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input ref={(input) => this._text = input} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    )
  }
  _handleSubmit(event) {
    event.preventDefault();
    var newItem = {
      text: this._text.value,
      id: Date.now()
    }
    this.setState({items: this.state.items.concat(newItem), text: ''})
  }
}

class TodoList extends Component {
  render() {
    return(
      <ol>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    )
  }
}

export default Todo;
