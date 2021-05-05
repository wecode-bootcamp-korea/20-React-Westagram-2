import React, { Component } from 'react';
import Friend from './Friend';

class Sidebox extends Component {
  state = {
    update: [],
  };

  componentDidMount() {
    const option = {
      method: 'GET',
    };

    fetch(
      'http://localhost:3000/data/minjungkim/asideFriendsRecommend.json',
      option
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          update: data,
        });
      });
  }

  render() {
    const { title } = this.props;

    return (
      <div className="sidebox">
        <div className="sidebox_header">
          <span className="sidebox_title">{title}</span>
          <span className="sidebox_show_all">모두 보기</span>
        </div>
        <div>
          {this.state.update.map(item => {
            return (
              <Friend
                key={item.id}
                alt={item.alt}
                imgUrl={item.imgUrl}
                user={item.userId}
                tag={item.tag}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sidebox;
