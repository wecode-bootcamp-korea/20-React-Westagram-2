import React from 'react';

class Recommend extends React.Component {
  render() {
    return (
      <section>
        <header className="head">
          <div>회원님을 위한 추천</div>
          <a herf="#">모두 보기</a>
        </header>
        <ul className="storyList">
          <li>
            <img alt="bts" src="/images/yurimkim/btsjpg.jpg" />
            <div>
              <p className="title">bts</p>
              <p>yurim4545님 외 1000명이 팔로우합니다</p>
            </div>
            <button>팔로우</button>
          </li>
          <li>
            <img alt="bts" src="/images/yurimkim/bts_jimin.jpg" />
            <div>
              <p className="title">bts_jimin</p>
              <p>yurim4545님 외 123명이 팔로우합니다</p>
            </div>
            <button>팔로우</button>
          </li>
          <li>
            <img alt="bts" src="/images/yurimkim/bts_v.jpg" />
            <div>
              <p className="title">bts_v</p>
              <p>yurim4545님 외 456명이 팔로우합니다</p>
            </div>
            <button>팔로우</button>
          </li>
          <li>
            <img alt="bts" src="/images/yurimkim/bts.jpg" />
            <div>
              <p className="title">bts</p>
              <p>yurim4545님 외 100명이 팔로우합니다</p>
            </div>
            <button>팔로우</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default Recommend;
