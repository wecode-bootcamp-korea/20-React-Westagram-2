import React from 'react';
import './FeedHeader.scss';

class FeedHeader extends React.Component {
  render() {
    const { userImg, userName } = this.props;
    return (
      <header className="feedHeader">
        <img src={userImg} alt="wecode" />
        <div>
          <a href="#">{userName}</a>
          <a href="#">
            <i className="fas fa-ellipsis-h"></i>
          </a>
        </div>
      </header>
    );
  }
}

export default FeedHeader;
