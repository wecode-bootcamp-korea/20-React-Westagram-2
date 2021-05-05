import React, { Component } from 'react';
import FeedIcons from './FeedIcons';
import FeedLikes from './FeedLikes';
import FeedCommentBox from './FeedCommentBox';

class FeedContent extends Component {
  render() {
    const { src, alt, text, comments, onDelete } = this.props;

    return (
      <>
        <img className="feed_image" src={src} alt={alt} />
        <div className="feed_contents">
          <FeedIcons />
          <FeedLikes />
          <FeedCommentBox text={text} comments={comments} onDelete={onDelete} />
          <div className="feed_posting_time">42분 전</div>
        </div>
      </>
    );
  }
}

export default FeedContent;
