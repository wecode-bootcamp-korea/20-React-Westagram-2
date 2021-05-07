import React, { Component } from 'react';

class NavSearchResult extends Component {
  state = {
    search: [
      {
        id: '1',
        userName: '유태오',
        userId: 'teoyoo',
        userAvatarUrl:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141804109_826721644544936_4005794822363103818_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=y1L0lcguePUAX_uyQU_&edm=AHG7ALcAAAAA&ccb=7-4&oh=3918278d6f146fe44cc959ad63ecde11&oe=60A4ACE0&_nc_sid=5cbaad',
        userAvatarAlt: '유태오',
      },
      {
        id: '2',
        userName: '정용진',
        userId: 'yj_loves',
        userAvatarUrl:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141804109_826721644544936_4005794822363103818_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=y1L0lcguePUAX_uyQU_&edm=AHG7ALcAAAAA&ccb=7-4&oh=3918278d6f146fe44cc959ad63ecde11&oe=60A4ACE0&_nc_sid=5cbaad',
        userAvatarAlt: '정용진',
      },
      {
        id: '3',
        userName: '정용진',
        userId: 'yj_loves',
        userAvatarUrl:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141804109_826721644544936_4005794822363103818_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=y1L0lcguePUAX_uyQU_&edm=AHG7ALcAAAAA&ccb=7-4&oh=3918278d6f146fe44cc959ad63ecde11&oe=60A4ACE0&_nc_sid=5cbaad',
        userAvatarAlt: '정용진',
      },
      {
        id: '4',
        userName: 'explorefervor',
        userId: 'explorefervor',
        userAvatarUrl:
          'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/179626046_642504080439231_9138865483537982709_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=6ONqTtN-ql0AX8cjxkX&edm=AP_V10EBAAAA&ccb=7-4&oh=f5283db73e41ad37eda34f28f7e1df5e&oe=60B9437A&_nc_sid=4f375e',
        userAvatarAlt: 'explorefervor',
      },
    ],
  };

  // componentDidMount() {
  //   const url = '/data/minjungkim/SEARCHRESULT.json';
  //   const option = {
  //     method: 'GET',
  //   };

  //   fetch(url, option)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log('wow');
  //       this.setState({
  //         search: data,
  //       });
  //     });
  // }

  render() {
    const { keyword } = this.props;
    const { search } = this.state;
    const filteredResult = data => {
      data = data.filter(item =>
        item.userName.toLowerCase().indexOf(keyword.toLowerCase())
      );

      return data.map(item => {
        return (
          <li className="user">
            <img
              className="user_img small"
              src={item.userAvatarUrl}
              alt={item.userAvatarAlt}
            />
            <div className="user_info">
              <div className="user_name">{item.userName}</div>
            </div>
          </li>
        );
      });
    };

    return (
      <div className="search">
        <div className="search_result">
          <span className="search_history">최근 검색 항목</span>
          <span className="search_history_delete">모두 지우기</span>
        </div>
        <ul>{filteredResult(search)}</ul>
      </div>
    );
  }
}

export default NavSearchResult;
