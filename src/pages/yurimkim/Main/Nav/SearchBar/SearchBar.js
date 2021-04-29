import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <header className="searchTitle">
          <p>최근 검색 항목</p>
          <button>모두 지우기</button>
        </header>
        <ul className="searchListView">
          <li className="searchListLi">
            <a href="#">
              <img alt="bts" src="/images/yurimkim/btsjpg.jpg" />
              <div>
                <div>
                  <p>bts</p>
                  <p>BTS world</p>
                </div>
                <button className="searchDel">×</button>
              </div>
            </a>
          </li>
          <li className="searchListLi">
            <a href="#">
              <img alt="bts" src="/images/yurimkim/wecode.png" />
              <div>
                <div>
                  <p>wecode</p>
                  <p>{'>wecode'} | 위코드 • 팔로잉</p>
                </div>
                <button className="searchDel">×</button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBar;
