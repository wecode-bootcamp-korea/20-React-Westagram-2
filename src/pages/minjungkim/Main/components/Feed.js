import React, { Component } from 'react';
import NewComment from './NewComment';
import FeedCommentBox from './FeedCommentBox';
import FeedIcons from './FeedIcons';
import FeedLikes from './FeedLikes';

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
    const { img, alt, text } = this.props;
    return (
      <article className="feed">
        {/* 사진, 아이디 */}
        <div className="feed_header">
          <div className="feeder_info">
            <img
              className="feeder_avatar"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/13549579_1658271794499223_201858282_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=CM5HpRn-bqcAX8rbCiu&edm=AP_V10EAAAAA&ccb=7-4&oh=8988dacbb422bf306fcda76c4391d97b&oe=60A26FDA&_nc_sid=4f375e"
              alt="avatar"
            />
            <div className="feeder_id">travellingthroughtheworld</div>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>

        {/* 올린사진 */}
        <img className="feed_image" src={img} alt={alt} />
        <div className="feed_contents">
          <FeedIcons />
          <FeedLikes />
          <FeedCommentBox text={text} comments={this.state.comments} />
          <div className="feed_posting_time">42분 전</div>
        </div>
        <NewComment onSubmit={this.handleCreateComment} />
      </article>
    );
  }
}

export default Feed;
