import React, { Component } from 'react';

class FeedNewComment extends Component {
  state = {
    id: Date.now(),
    value: '',
    isLiked: false,
  };

  handleCommentInput = e => {
    this.setState({
      id: this.state.id + 1,
      value: e.target.value,
    });
  };

  isButtonActive = () => {
    const { value } = this.state;
    return value && 'active';
  };

  handleSubmitComment = e => {
    const { value } = this.state;

    e.preventDefault();
    if (value) {
      this.props.onSubmit(this.state);
    } else {
      alert("Woops, you don't comment anything here!");
    }
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmitComment} className="feed_new_comment">
        <div className="feed_text">
          <i className="far fa-smile"></i>
          <input
            onChange={this.handleCommentInput}
            value={value}
            className="feed_input"
            type="text"
            placeholder="댓글 달기..."
          />
        </div>
        <button id="posting_btn" className={this.isButtonActive() && 'active'}>
          게시
        </button>
      </form>
    );
  }
}

export default FeedNewComment;
