import React, { Component } from 'react';

import Feed from './Feed';

class Section extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    const url = 'http://localhost:3000/data/minjungkim/feedData.json';
    const option = {
      method: 'GET',
    };

    fetch(url, option)
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    const { feeds } = this.state;

    return (
      <section className="section">
        {feeds.map(feed => (
          <Feed
            alt={feed.alt}
            imgUrl={feed.imgUrl}
            key={feed.id}
            text={feed.text}
          />
        ))}
      </section>
    );
  }
}

export default Section;
