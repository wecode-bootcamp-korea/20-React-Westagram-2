import React, { Component } from 'react';
import FeedCommentBox from './FeedCommentBox';

class FeedContent extends Component {
  render() {
    return (
      <div className="feed_contents">
        <div className="feed_icons_row">
          <div className="feed_icons">
            <i className="fas fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
          </div>
          <i className="far fa-bookmark"></i>
        </div>
        <div className="feed_likes">
          <div>
            <strong>wecode_bootcamp</strong>님 <strong>여러 명</strong>이
            좋아합니다
          </div>
        </div>
        <FeedCommentBox />
        <div className="feed_posting_time">42분 전</div>
      </div>
    );
  }
}

export default FeedContent;
