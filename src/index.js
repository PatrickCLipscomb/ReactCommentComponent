import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CommentBox from './Comment';
import Greeting from './Greeting';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('scoots')
);

ReactDOM.render(
  <CommentBox />,
  document.getElementById('comments')
);

ReactDOM.render(
  <Greeting />,
  document.getElementById('greeting')
)
