import React, { Component } from 'react';

export class NavSearchResultList extends Component {
  render() {
    const { imgUrl, alt, name, id } = this.props;

    return (
      <li className="user">
        <div className="user_wrapper">
          <img className="user_img small" src={imgUrl} alt={alt} />
          <div className="user_info">
            <div className="user_id">{id}</div>
            <div className="user_name">{name}</div>
          </div>
        </div>
        <i className="fas fa-times"></i>
      </li>
    );
  }
}

export default NavSearchResultList;
