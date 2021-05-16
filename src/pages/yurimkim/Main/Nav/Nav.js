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
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleChange = () => {
    const { searchData } = this.state;
    const filterName = searchData.filter(el =>
      el.userName.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
    // this.setState({
    //   searchData: filterName,
    // });
    return filterName;
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
    const result = this.handleChange();
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
              onKeyUp={this.getSearchValue}
              className="search"
              type="text"
              placeholder="검색"
            />
          </div>
          <SearchBar searchData={result} searchPage={searchPage} />
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
