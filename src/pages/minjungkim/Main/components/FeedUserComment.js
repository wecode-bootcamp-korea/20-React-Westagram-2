import React, { Component } from 'react';

class FeedUserComment extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="feed_user_comment">
        <span className="feeder_id">travellingthroughtheworld</span>
        <span className="feeder_comment">{comments}</span>
      </div>
    );
  }
}

export default FeedUserComment;
