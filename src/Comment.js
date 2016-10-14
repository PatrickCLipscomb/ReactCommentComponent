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
        {id: 2, content: "this is only my second prop"},
        {id: 3, content: "who knew deleting would be so hard"}
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
      <div className="main-div">
        <h4>{this._getCommentsTitle(comments.length)}</h4>
        <CommentForm addComment={this._addComment.bind(this)} />
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </div>
    )
  }
  _addComment(content) {
    const comment = {
      id: Date.now(),
      content
    }
    this.setState({comments: this.state.comments.concat([comment])})
  }
  _deleteComment(commentID) {
    let target
    const commentsNew = this.state.comments
    commentsNew.forEach(function(comment) {
      if (comment.id === commentID) {
        target = comment
      }
    })
    commentsNew.splice(commentsNew.indexOf(target), 1)
    this.setState({comments: commentsNew})
  }
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  _getComments() {
    return this.state.comments.map((comment) => {
      return (<Comment
        key={comment.id}
        id={comment.id}
        content={comment.content}
        onDelete={this._deleteComment.bind(this)} />
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
    const arrayOptions = ['Javascript', 'JSX', 'React']
    return (
      <div className="comment" >
        <h2>{this.props.content}</h2>
        <h4>It appears that I have discovered how to add components</h4>
        <button onClick={this._handleDelete.bind(this)}>Delete This Comment</button>
      </div>
    );
  }
  _handleDelete() {
    this.props.onDelete(this.props.id);
  }
}

class CommentForm extends Component {
  render() {
    return (
      <div>
        <h4>Add a Comment</h4>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input placeholder="content" ref={(input) => this._content = input}/>
        </form>
      </div>
    )
  }
  _handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this._content.value);
  }
}

export default CommentBox;
