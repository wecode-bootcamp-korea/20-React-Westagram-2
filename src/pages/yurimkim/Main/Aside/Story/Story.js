import React from 'react';

export const STORYLIST = [
  {
    id: 1,
    imgAlt: 'bts',
    imgUrl: '/images/yurimkim/bts_v2.jpg',
    userName: 'bts_v',
    time: '5분 전',
  },
  {
    id: 2,
    imgAlt: 'bts',
    imgUrl: '/images/yurimkim/bts.jpg',
    userName: 'bts',
    time: '9분 전',
  },
  {
    id: 3,
    imgAlt: 'bts',
    imgUrl: '/images/yurimkim/bts_jimin.jpg',
    userName: 'bts_jimin',
    time: '13분 전',
  },
  {
    id: 4,
    imgAlt: 'bts',
    imgUrl: '/images/yurimkim/btsjpg.jpg',
    userName: 'bts_world',
    time: '26분 전',
  },
];

class Story extends React.Component {
  render() {
    return (
      <section>
        <header className="head">
          <div>스토리</div>
          <a herf="#">모두 보기</a>
        </header>
        <ul className="storyList">
          {STORYLIST.map(el => {
            return (
              <li key={el.id}>
                <img alt={el.imgAlt} src={el.imgUrl} />
                <div>
                  <p className="title">{el.userName}</p>
                  <p>{el.time}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Story;
