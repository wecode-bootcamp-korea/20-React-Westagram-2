import React from 'react';

class Story extends React.Component {
  render() {
    return (
      <section>
        <header className="head">
          <div>스토리</div>
          <a herf="#">모두 보기</a>
        </header>
        <ul className="storyList">
          <li>
            <img alt="bts" src="/images/yurimkim/bts_v2.jpg" />
            <div>
              <p className="title">bts_v</p>
              <p>16분 전</p>
            </div>
          </li>
          <li>
            <img alt="bts" src="/images/yurimkim/bts.jpg" />
            <div>
              <p className="title">bts</p>
              <p>34분 전</p>
            </div>
          </li>
          <li>
            <img alt="bts" src="/images/yurimkim/bts_jimin.jpg" />
            <div>
              <p className="title">bts_jimin</p>
              <p>1시간 전</p>
            </div>
          </li>
          <li>
            <img alt="bts" src="/images/yurimkim/btsjpg.jpg" />
            <div>
              <p className="title">bts_world</p>
              <p>2시간 전</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Story;
