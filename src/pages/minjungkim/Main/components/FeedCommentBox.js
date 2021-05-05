import React, { Component } from 'react';
import FeedUserComment from './FeedUserComment';
import FeedComment from './FeedComment';

export class FeedCommentBox extends Component {
  render() {
    const { comments, text, onDelete, onLike } = this.props;

    return (
      <div className="feed_comment_box">
        <FeedUserComment comments={text} />
        <ul className="feed_comment_container">
          {comments.map(comment => (
            <FeedComment
              key={comment.id}
              value={comment.value}
              name={comment.name}
              isLiked={comment.isLiked}
              onDelete={onDelete}
              onLike={onLike}
              id={comment.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedCommentBox;
