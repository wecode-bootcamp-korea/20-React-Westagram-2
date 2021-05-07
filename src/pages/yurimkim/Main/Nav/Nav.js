import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProfilePage from './ProfilePage/ProfilePage';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      showPage: false,
      searchData: [],
      searchPage: false,
    };
  }

  componentDidMount() {
    fetch('/data/searchData.json')
      .then(res => res.json())
      .then(searchData => {
        this.setState({
          searchData: searchData,
        });
      });
  }

  getSearchValue = e => {
    const { value } = e.target;
    const { searchData } = this.state;
    const filterName = value =>
      searchData.filter(el => el.userName.includes(value));
    const result = filterName(value);
    this.setState({
      searchData: result,
    });
  };

  handleShowPage = () => {
    this.setState({
      showPage: !this.state.showPage,
    });
  };

  handleSearchPage = () => {
    this.setState({
      searchPage: !this.state.searchPage,
    });
  };

  render() {
    const { searchData, showPage, searchPage } = this.state;
    return (
      <nav className="nav">
        <div className="maxWidth">
          <div className="navLogo">
            <img alt="instagram" src="/images/yurimkim/instagram.png" />
            <span> | </span>
            <span className="logoText">Westagram</span>
          </div>
          <div className="bar">
            <i class="searchIcon fas fa-search"></i>
            <input
              onClick={this.handleSearchPage}
              onKeyPress={this.getSearchValue}
              className="search"
              type="text"
              placeholder="검색"
            />
          </div>
          <SearchBar searchData={searchData} searchPage={searchPage} />
          <ul className="navList">
            <li>
              <a href="#">
                <i class="far fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-heart"></i>
              </a>
            </li>
            <li onClick={this.handleShowPage} className="profileImage">
              <a href="#">
                <img alt="profileImage" src="/images/yurimkim/profile.jpg" />
              </a>
            </li>
          </ul>
        </div>
        <ProfilePage handleShowPage={showPage} />
      </nav>
    );
  }
}

export default Nav;
