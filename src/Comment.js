import React, { Component } from 'react';
import logo from './logo.svg';
import './Comment.css';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      comments: [
        {id: 1, content: "this is my very first prop"},
        {id: 2, content: "this is only my second prop"}
      ]
    };
  }
  render() {
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments) {
      commentNodes = <div className="commentBox">{comments}</div>;
    }
    let buttonText;
    if (this.state.showComments) {
      buttonText = "Hide Comments"
    } else {
      buttonText = "Show Comments"
    }
    return (
      <div>
        <h4>{this._getCommentsTitle(comments.length)}</h4>
        <CommentForm addComment={this._addComment.bind(this)} />
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </div>
    )
  }
  _addComment(content) {
    const comment = {
      id: this.state.comments.length + 1,
      content
    }
    this.setState({comments: this.state.comments.concat([comment])})
  }
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  _getComments() {
    return this.state.comments.map((comment) => {
      return (<Comment
        content={comment.content}
        key={comment.id} />
      );
    });
  }
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "There is only 1 comment";
    } else {
      return "There are " + commentCount + " comments";
    }
  }
}

class Comment extends Component {
  render() {
    const now = new Date();
    const arrayOptions = ['Javascript', 'Ruby', 'Python']
    return (
      <div className="comment">
      <h1>It appears that I have discovered how to add components</h1>
        <ul className="arrayOptions">
          {arrayOptions.map( internship => <li>{internship}</li>)}
        </ul>
        <h4>{this.props.content}</h4>
      </div>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <input placeholder="content" ref={(input) => this._content = input}/>
      </form>
    )
  }
  _handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this._content.value);
  }
}

export default CommentBox;
