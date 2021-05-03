import React, { Component } from 'react';

import Feed from './Feed';

class Section extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    const option = {
      method: 'GET',
    };

    fetch('http://localhost:3000/data/minjungkim/feedData.json', option)
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    return (
      <section className="section">
        {this.state.feeds.map(feed => (
          <Feed key={feed.id} text={feed.text} img={feed.imgUrl} />
        ))}
      </section>
    );
  }
}

export default Section;
