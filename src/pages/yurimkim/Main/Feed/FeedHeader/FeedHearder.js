import React from 'react';
import './FeedHeader.scss';

class FeedHeader extends React.Component {
  render() {
    console.log(this.props.userImg);
    return (
      <header className="feedHeader">
        <img src={this.props.userImg} alt="wecode" />

        <div>
          <a href="#">{this.props.userName}</a>
          <a href="#">
            <i className="fas fa-ellipsis-h"></i>
          </a>
        </div>
      </header>
    );
  }
}

export default FeedHeader;
