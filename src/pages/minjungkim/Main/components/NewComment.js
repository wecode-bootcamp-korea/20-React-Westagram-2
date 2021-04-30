import React, { Component } from 'react';

class NewComment extends Component {
  render() {
    return (
      <form className="feed_new_comment">
        <div className="feed_text">
          <i className="far fa-smile"></i>
          <input
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
