import React, { Component } from 'react';

class Friend extends Component {
  static defaultProps = {
    time: '',
    tag: '',
  };

  handleTag = () => {
    return this.props.tag ? 'tag' : 'time';
  };

  render() {
    const { imgUrl, user, tag, time } = this.props;
    return (
      <div className="user">
        <img className="user_img small" src={imgUrl} alt="{this.props.alt" />
        <div className="user_info">
          <div className="user_id">{user}</div>
          <div className="user_tag">{time || tag}</div>
        </div>
      </div>
    );
  }
}

export default Friend;
