import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  render() {
    const { searchData, searchPage } = this.props;
    return (
      <div className="searchBar" style={{ display: searchPage && 'block' }}>
        <header className="searchTitle">
          <p>최근 검색 항목</p>
          <button>모두 지우기</button>
        </header>
        <ul className="searchListView">
          <li className="searchListLi">
            <a href="#">
              <img
                alt="instagram"
                src="https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png"
              />
              <div>
                <div>
                  <p>instagram</p>
                  <p>instagram</p>
                </div>
                <button className="searchDel">×</button>
              </div>
            </a>
          </li>
          {searchData.map(el => {
            return (
              <li className="searchListLi" key={el.id}>
                <a href={el.Ahref}>
                  <img alt={el.imgAlt} src={el.imgUrl} />
                  <div>
                    <div>
                      <p>{el.userName}</p>
                      <p>{el.content}</p>
                    </div>
                    <button className="searchDel">×</button>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
