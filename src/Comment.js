import React, { Component } from 'react';
import logo from './logo.svg';
import './Comment.css';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      showComments: false
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
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </div>
    )
  }
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  _getComments() {
    const commentList = [
      {id: 1, content: "this is my very first prop"},
      {id: 2, content: "this is only my second prop"}
    ];
    return commentList.map((comment) => {
      return(<Comment content={comment.content} key={comment.id} />);
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

export default CommentBox;
