import React, { Component } from 'react';
import FeedOwner from './FeedOwner.js';
import FeedContent from './FeedContent.js';
import NewComment from './NewComment';

export class Feed extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const option = {
      method: 'GET',
    };

    fetch('http://localhost:3000/data/minjungkim/commentData.json', option)
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

  render() {
    const { imgUrl, alt, text } = this.props;
    const { comments } = this.state;
    return (
      <article className="feed">
        <FeedOwner />
        <FeedContent comments={comments} src={imgUrl} alt={alt} text={text} />
        <NewComment onSubmit={this.handleCreateComment} />
      </article>
    );
  }
}

export default Feed;
