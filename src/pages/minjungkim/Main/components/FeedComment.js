import React, { Component } from 'react';

class FeedComment extends Component {
  static defaultProps = {
    name: '1dookong',
  };

  handleLikeBtn = e => {
    const { onLike } = this.props;
    e.preventDefault();
    onLike(e.target.closest('li').dataset.num);
  };

  handleDeleteBtn = e => {
    const { onDelete } = this.props;
    e.preventDefault();
    onDelete(e.target.closest('li').dataset.num);
  };

  render() {
    const { value, name, id, isLiked } = this.props;

    return (
      <li className="feed_comment_list" data-num={id}>
        <div className="feed_comment">
          <span className="friend">{name}</span>
          <span className="friend_comment">{value}</span>
        </div>
        <div className="feed_controls">
          <button
            id="like_btn"
            onClick={this.handleLikeBtn}
            className={isLiked && 'active'}
          >
            {isLiked ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>
          <button id="delete_btn" onClick={this.handleDeleteBtn}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default FeedComment;
