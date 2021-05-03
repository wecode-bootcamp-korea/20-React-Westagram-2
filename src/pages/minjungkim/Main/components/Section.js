import React, { Component } from 'react';
import NewComment from './NewComment';
import FeedCommentBox from './FeedCommentBox';

class Section extends Component {
  state = {
    comment: [],
  };

  handleCreateComment = data => {
    this.setState({
      comment: [...this.state.comment, data],
    });
  };

  render() {
    return (
      <section className="section">
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
          <img
            className="feed_image"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/174153253_826643891395598_4002572279753014475_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Mx9u_wsRG3IAX_TitLe&edm=AP_V10EAAAAA&ccb=7-4&oh=783c47488c7d08128946936695772b94&oe=60A2E9CF&_nc_sid=4f375e"
            alt="Hawaii"
          />
          <div className="feed_contents">
            <div className="feed_icons_row">
              <div className="feed_icons">
                <i className="fas fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </div>
              <i className="far fa-bookmark"></i>
            </div>
            <div className="feed_likes">
              <div>
                <strong>wecode_bootcamp</strong>님 <strong>여러 명</strong>이
                좋아합니다
              </div>
            </div>
            <FeedCommentBox comments={this.state.comment} />
            <div className="feed_posting_time">42분 전</div>
          </div>
          <NewComment onSubmit={this.handleCreateComment} />
        </article>
      </section>
    );
  }
}

export default Section;
