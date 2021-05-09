import React from 'react';
import Comments from '../Comments/Comments';
import './Article.scss';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comments: '',
    };
  }

  componentDidMount() {
    fetch('data/commentData.json')
      .then(res => res.json())
      .then(commentBox => this.setState({ commentBox }));
  }

  //input에 넣을 함수
  getInputValue = e => {
    this.setState({ comments: e.target.value });
  };

  uploadComments = e => {
    e.preventDefault();
    const { commentBox, comments } = this.state;
    this.setState({
      commentBox: [
        ...commentBox,
        {
          id: 4,
          userName: 'da_seul',
          content: comments,
        },
      ],
      comments: '',
    });
  };

  enterComments = e => {
    if (e.keyCode === 13) {
      this.uploadComments();
    } // 현재 실행안됨...
  };

  render() {
    const { commentBox } = this.state;
    return (
      <article className="instaPost">
        <header className="instaPost_header">
          <img
            alt="Profile_img"
            src="https://i.pinimg.com/564x/f3/e7/5f/f3e75f3d25d14ec2cdd49ff6f21ffd37.jpg"
          />
          <span>meow_meow</span>
        </header>
        <div className="instaPost_img">
          <img
            alt="feeds_img"
            src="https://i.pinimg.com/564x/c0/78/17/c07817dd7a8a867d9389220e06adc857.jpg"
          />
        </div>
        <section className="instaPost_icons">
          <div className="instaPost_icons_left">
            <img
              alt="heart_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img alt="comment_img" src="images/daseullee/comment.jpg" />
            <img
              alt="directmessageimg"
              src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_send-512.png"
            />
          </div>
          <img
            alt="bookmark"
            className="bookmark_icon"
            src="images/daseullee/bookmark.webp"
          />
        </section>
        <div className="instaPost_comments">
          <section className="instaPost_like">좋아요 100개</section>
          <div className="instaPost_mainContent">
            <div className="instaPost_content">
              <p className="instaPost_id">meow_meow</p>
              <p>주말에 친구들이랑 셀카 한방, 우리 우정 영원히~~~~~!</p>
            </div>
          </div>
          {commentBox.map(comments => {
            return (
              <Comments
                key={comments.id}
                mockdataName={comments.userName}
                mockdataComments={comments.content}
              />
            );
          })}
          <p className="instaPost_time">2시간 전</p>
          <div className="instaPost_commentsBar">
            <img
              alt="smileicon"
              src="http://simpleicon.com/wp-content/uploads/smile.png"
            />
            <input
              className="instaPost_input"
              type="text"
              placeholder="댓글 달기..."
              value={this.state.comments}
              onChange={this.getInputValue}
              onKeyDown={this.enterComments}
            />
            <button onClick={this.uploadComments} className="submit">
              게시
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
