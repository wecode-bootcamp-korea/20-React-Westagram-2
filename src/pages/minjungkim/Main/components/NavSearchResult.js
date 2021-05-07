import React, { Component } from 'react';
import NavSearchResultList from './NavSearchResultList';

class NavSearchResult extends Component {
  state = {
    search: [],
  };

  componentDidMount() {
    const url = '/data/minjungkim/searchList.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          search: data,
        });
      });
  }

  render() {
    const { keyword, isSearching } = this.props;
    const { search } = this.state;

    const filteredResult = search.filter(item => {
      return item.userId.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });

    return (
      <div className={'search_result' + (isSearching ? ' active' : '')}>
        <div className="header">
          <span className="search_history">최근 검색 항목</span>
          <button className="search_history_delete">모두 지우기</button>
        </div>
        <ul className="search_result_lists">
          {filteredResult.map(item => (
            <NavSearchResultList
              key={item.id}
              name={item.userName}
              id={item.userId}
              imgUrl={item.userAvatarUrl}
              alt={item.userAvatarAlt}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default NavSearchResult;
