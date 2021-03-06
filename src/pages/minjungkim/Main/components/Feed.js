import React, { Component } from 'react';
import FeedOwner from './FeedOwner.js';
import FeedContent from './FeedContent.js';
import FeedNewComment from './FeedNewComment';
import './Feed.scss';

export class Feed extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const url = '/data/minjungkim/commentData.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }

  handleCreateComment = data => {
    this.setState({
      comments: [...this.state.comments, data],
    });
  };

  handleDeleteComment = id => {
    const { comments } = this.state;
    const filteredComments = comments.filter(
      comment => comment.id !== Number(id)
    );
    this.setState({
      comments: filteredComments,
    });
  };

  handleLikedBtn = id => {
    const { comments } = this.state;
    const copyComments = [...this.state.comments];
    const findIndex = comments.findIndex(comment => comment.id === Number(id));
    copyComments[findIndex].isLiked = !comments[findIndex].isLiked;
    this.setState({ copyComments });
  };

  render() {
    const { imgUrl, text } = this.props;
    const { comments } = this.state;

    return (
      <article className="feed">
        <FeedOwner />
        <FeedContent
          comments={comments}
          src={imgUrl}
          text={text}
          onDelete={this.handleDeleteComment}
          onLike={this.handleLikedBtn}
        />
        <FeedNewComment onSubmit={this.handleCreateComment} />
      </article>
    );
  }
}

export default Feed;
