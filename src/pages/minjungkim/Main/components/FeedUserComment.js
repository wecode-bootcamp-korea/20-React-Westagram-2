import React, { Component } from 'react';

class FeedUserComment extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="feed_user_comment">
        <span className="feed_id">travellingthroughtheworld</span>
        <span className="feed_message">{comments}</span>
      </div>
    );
  }
}

export default FeedUserComment;
