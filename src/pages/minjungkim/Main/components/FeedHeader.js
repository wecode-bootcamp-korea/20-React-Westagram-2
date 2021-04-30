import React, { Component } from 'react';
import FeederInfo from './FeederInfo';

class FeedHeader extends Component {
  render() {
    return (
      <div className="feed_header">
        <FeederInfo />
        <i className="fas fa-ellipsis-h"></i>
      </div>
    );
  }
}

export default FeedHeader;
