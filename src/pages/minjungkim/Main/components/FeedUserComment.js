import React, { Component } from 'react';

class FeedUserComment extends Component {
  render() {
    return (
      <div className="feed_user_comment">
        <span className="feeder_id">travellingthroughtheworld</span>
        <span className="feeder_comment">
          {this.props.comments}
          {/* <a href="https://www.instagram.com/explore/tags/aloha/">#aloha</a>
          <a href="https://www.instagram.com/explore/tags/hawaii/">#hawaii</a>
          <a href="https://www.instagram.com/explore/tags/hawaiitour/">
            #tourhawaii
          </a>
          <a href="https://www.instagram.com/explore/tags/wondefulplaces/">
            #wondefulplaces
          </a> */}
        </span>
      </div>
    );
  }
}

export default FeedUserComment;
