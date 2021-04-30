import React, { Component } from 'react';

class NavSearchLists extends Component {
  render() {
    return (
      <ul className="search_result_lists">
        <li className="search_result">
          <div className="user">
            <img
              className="user_img small"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165624425_157218146270973_7029745587477918295_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=k-dq3a2OjuoAX9rqmaF&edm=AGeOuZUAAAAA&ccb=7-4&oh=b37a8b5bf0cc8bddb9080ce09202f6d3&oe=60A5D7E5&_nc_sid=924bfa"
              alt="user_avatar"
            />
            <div className="user_info">
              <div className="user_id">
                <span> yj_loves</span>
                <i className="fas fa-certificate"></i>
              </div>
              <div className="user_name">정용진</div>
            </div>
          </div>
          <i className="fas fa-times"></i>
        </li>
        <li className="search_result">
          <div className="user">
            <img
              className="user_img small"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141804109_826721644544936_4005794822363103818_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=y1L0lcguePUAX_uyQU_&edm=AHG7ALcAAAAA&ccb=7-4&oh=3918278d6f146fe44cc959ad63ecde11&oe=60A4ACE0&_nc_sid=5cbaad"
              alt="user_avatar"
            />
            <div className="user_info">
              <div className="user_id">
                <span>teoyoo</span>
              </div>
              <div className="user_name">유태오</div>
            </div>
          </div>
          <i className="fas fa-times"></i>
        </li>
      </ul>
    );
  }
}

export default NavSearchLists;
