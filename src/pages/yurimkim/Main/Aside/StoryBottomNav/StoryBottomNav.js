import React from 'react';
import './StoryBottomNav.scss';

export const INFO = [
  { id: 1, content: '도움말', url: 'https://help.instagram.com/' },
  { id: 2, content: '홍보 센터', url: 'https://about.instagram.com/blog' },
  { id: 3, content: 'API', url: 'https://www.instagram.com/developer/' },
  {
    id: 4,
    content: '채용정보',
    url: 'https://about.instagram.com/about-us/careers',
  },
  {
    id: 5,
    content: '개인정보처리방침',
    url: 'https://help.instagram.com/519522125107875',
  },
  { id: 6, content: '약관', url: 'https://help.instagram.com/581066165581870' },
  {
    id: 7,
    content: '위치',
    url: 'https://www.instagram.com/explore/locations/',
  },
  {
    id: 8,
    content: '인기 계정',
    url: 'https://www.instagram.com/directory/profiles/',
  },
];

class StoryBottomNav extends React.Component {
  render() {
    return (
      <nav className="StoryBottomNav">
        <ul>
          {INFO.map(el => {
            return (
              <li key={el.id}>
                <a href={el.url}>{el.content}</a>
              </li>
            );
          })}
        </ul>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
      </nav>
    );
  }
}

export default StoryBottomNav;
