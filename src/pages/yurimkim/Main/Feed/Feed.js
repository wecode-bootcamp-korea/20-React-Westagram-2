import React from 'react';
import FeedHeader from './FeedHeader/FeedHearder';
import CommentList from './CommentList/CommentList';
import './Feed.scss';

class Feed extends React.Component {
  render() {
    const { userName, userImg, feedImgUrl, feedImgAlt } = this.props;
    return (
      <article className="feed">
        <FeedHeader userName={userName} userImg={userImg} />
        <main className="feedContent">
          <img alt={feedImgAlt} src={feedImgUrl} />
        </main>
        <div className="feedBottom">
          <section>
            <ul>
              <li>
                <button>
                  <i class="far fa-heart"></i>
                </button>
              </li>
              <li>
                <button>
                  <i class="far fa-comment"></i>
                </button>
              </li>
              <li>
                <button>
                  <i class="fas fa-external-link-alt"></i>
                </button>
              </li>
            </ul>
            <button>
              <i class="far fa-bookmark"></i>
            </button>
          </section>
          <section>
            <div>
              <img alt="bts v" src="/images/yurimkim/bts_v.jpg" />
              <span>bts_v</span>님<span>외 10명</span>이 좋아합니다
            </div>
          </section>
          <CommentList />
        </div>
      </article>
    );
  }
}

export default Feed;
