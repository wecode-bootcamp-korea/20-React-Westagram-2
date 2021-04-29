import React from 'react';
import './FeedHeader.scss';

class FeedHeader extends React.Component {
  render() {
    return (
      <header className="feedHeader">
        <img src="/images/yurimkim/wecode.png" alt="wecode" />
        <div>
          <a href="#">wecode</a>
          <a href="#">
            <i className="fas fa-ellipsis-h"></i>
          </a>
        </div>
      </header>
    );
  }
}

export default FeedHeader;
