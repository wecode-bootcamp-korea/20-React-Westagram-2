import React, { Component } from 'react';

class NewComment extends Component {
  state = {
    value: '',
  };

  handleCommentInput = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmitComment = e => {
    e.preventDefault();
    if (this.state.value) {
      this.props.onSubmit(this.state.value);
    } else {
      alert("Woops, you don't comment anything here!");
    }
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitComment} className="feed_new_comment">
        <div className="feed_text">
          <i className="far fa-smile"></i>
          <input
            onChange={this.handleCommentInput}
            value={this.state.value}
            className="feed_input"
            type="text"
            placeholder="댓글 달기..."
          />
        </div>
        <button className="posting_btn">게시</button>
      </form>
    );
  }
}

export default NewComment;
