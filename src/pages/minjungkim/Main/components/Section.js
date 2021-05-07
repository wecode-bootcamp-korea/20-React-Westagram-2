import React, { Component } from 'react';
import Feed from './Feed';
import './Section.scss';

class Section extends Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    const url = '/data/minjungkim/feedData.json';
    fetch(url)
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
