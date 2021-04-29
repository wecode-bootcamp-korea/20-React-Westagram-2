import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <nav className="navBar">
          <div className="navBarLeft">
            <a href="/#">Westagram</a>
          </div>
          <div className="navBarSearch">
            <i className="fas fa-search fa-xs"></i>
            <input type="text" placeholder="검색" />
          </div>
          <div className="navBarRight">
            <ul>
              <li>
                <i className="far fa-compass fa-lg"></i>
              </li>
              <li>
                <i className="far fa-heart fa-lg"></i>
              </li>
              <li>
                <i className="far fa-user fa-lg"></i>
              </li>
            </ul>
          </div>
        </nav>
        <main className="mainContainer">
          <div className="feeds">
            <article className="post">
              <header className="postHeader">
                <div className="postHeaderImage">
                  <img
                    alt=""
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64612730_983461185328491_4116636839371079680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xV6XWthFREkAX_usc-j&edm=AIQHJ4wAAAAA&ccb=7-4&oh=a174845ae369e709cd2332da97d705bd&oe=60A399E6&_nc_sid=7b02f1"
                  />
                </div>
                <div className="user">
                  <span className="userName">
                    <a className="userNameId" href="/#">
                      brooklynmuseum
                    </a>
                  </span>
                </div>
                <div className="more">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </header>
              <div className="postMainImage">
                <img
                  alt=""
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/175730621_793217901622528_8915058214506707569_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=yVfmPmPs2-AAX-ioxFa&edm=ALLxIhEAAAAA&ccb=7-4&oh=4758e40cdfadda733c0aa58dc61d37e5&oe=60A4F56F&_nc_sid=b2a057"
                />
              </div>
              <div className="postIcons">
                <div className="postIconsLeft">
                  <i className="far fa-heart fa-lg"></i>
                  <i className="far fa-comment fa-lg"></i>
                  <i className="far fa-paper-plane fa-lg"></i>
                </div>
                <div className="postIconsRight">
                  <i className="far fa-bookmark fa-lg"></i>
                </div>
              </div>
              <div className="postLikes">
                <span className="postLikesCount">좋아요 754개</span>
              </div>
              <div className="postUserContainer">
                <div className="postUser">
                  <span className="postUserId">brooklynmuseum</span>
                  <span className="postUserDescription">
                    The Museum’s outdoor public spaces, including our plaza and
                    front steps, are open and available to our neighbors to
                    gather safely—to organize, reflect, and replenish.
                  </span>
                </div>
              </div>
              <div className="postTime">
                <span className="postTimePeriod">6시간 전</span>
              </div>
              <div className="comments">
                <div className="commentsIcon">
                  <i className="far fa-smile fa-lg"></i>
                </div>
                <div className="commentsInput">
                  <textarea
                    className="commentsInputComment"
                    placeholder="댓글 달기..."
                  ></textarea>
                </div>
                <div className="commentsPost">
                  <button className="commentsPostButton">게시</button>
                </div>
              </div>
            </article>
          </div>
          <div className="feedsRight">
            <div className="userInfo">
              <div className="userInfoImage">
                <img
                  alt="_chris_cho님의 프로필 사진"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/65310001_470364237082205_8112826771239337984_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=D-EcVh_TCpQAX_lDjpW&amp;edm=AIQHJ4wAAAAA&amp;ccb=7-4&amp;oh=9689cddccdc4bff4d55a6330943e2aaa&amp;oe=60A52328&amp;_nc_sid=7b02f1"
                />
              </div>
              <div className="userInfoContainer">
                <div className="userInfoId">
                  <a href="/#" className="userInfoIdName">
                    wychrischo
                  </a>
                </div>
                <div className="userInfoName">
                  <a href="/#" className="userInfoNameReal">
                    Christopher Cho
                  </a>
                </div>
              </div>
            </div>
            <div className="suggestionContainer">
              <div className="suggestionHeader">
                <div className="suggestionHeaderTag">회원님을 위한 추천</div>
                <a href="/#">모두 보기</a>
              </div>
              <div className="suggestionList">
                <div className="suggestionListContainer">
                  <div className="suggestionListPicture">
                    <img
                      alt=""
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64612730_983461185328491_4116636839371079680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xV6XWthFREkAX_usc-j&edm=AIQHJ4wAAAAA&ccb=7-4&oh=a174845ae369e709cd2332da97d705bd&oe=60A399E6&_nc_sid=7b02f1"
                    />
                  </div>
                  <div className="suggestionListInfo">
                    <div className="suggestionListId">brooklynmuseum</div>
                    <div className="suggestionListIdSuggest">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="suggestionButton">
                    <button type="button">팔로우</button>
                  </div>
                </div>
                <div className="suggestionListContainer">
                  <div className="suggestionListPicture">
                    <img
                      alt=""
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64612730_983461185328491_4116636839371079680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xV6XWthFREkAX_usc-j&edm=AIQHJ4wAAAAA&ccb=7-4&oh=a174845ae369e709cd2332da97d705bd&oe=60A399E6&_nc_sid=7b02f1"
                    />
                  </div>
                  <div className="suggestionListInfo">
                    <div className="suggestionListId">brooklynmuseum</div>
                    <div className="suggestionListIdSuggest">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="suggestionButton">
                    <button type="button">팔로우</button>
                  </div>
                </div>
                <div className="suggestionListContainer">
                  <div className="suggestionListPicture">
                    <img
                      alt=""
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64612730_983461185328491_4116636839371079680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xV6XWthFREkAX_usc-j&edm=AIQHJ4wAAAAA&ccb=7-4&oh=a174845ae369e709cd2332da97d705bd&oe=60A399E6&_nc_sid=7b02f1"
                    />
                  </div>
                  <div className="suggestionListInfo">
                    <div className="suggestionListId">brooklynmuseum</div>
                    <div className="suggestionListIdSuggest">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="suggestionButton">
                    <button type="button">팔로우</button>
                  </div>
                </div>
                <div className="suggestionListContainer">
                  <div className="suggestionListPicture">
                    <img
                      alt=""
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64612730_983461185328491_4116636839371079680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xV6XWthFREkAX_usc-j&edm=AIQHJ4wAAAAA&ccb=7-4&oh=a174845ae369e709cd2332da97d705bd&oe=60A399E6&_nc_sid=7b02f1"
                    />
                  </div>
                  <div className="suggestionListInfo">
                    <div className="suggestionListId">brooklynmuseum</div>
                    <div className="suggestionListIdSuggest">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="suggestionButton">
                    <button type="button">팔로우</button>
                  </div>
                </div>
                <div className="suggestionListContainer">
                  <div className="suggestionListPicture">
                    <img
                      alt=""
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64612730_983461185328491_4116636839371079680_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xV6XWthFREkAX_usc-j&edm=AIQHJ4wAAAAA&ccb=7-4&oh=a174845ae369e709cd2332da97d705bd&oe=60A399E6&_nc_sid=7b02f1"
                    />
                  </div>
                  <div className="suggestionListInfo">
                    <div>brooklynmuseum</div>
                    <div>회원님을 위한 추천</div>
                  </div>
                  <div className="suggestionButton">
                    <button type="button">팔로우</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
