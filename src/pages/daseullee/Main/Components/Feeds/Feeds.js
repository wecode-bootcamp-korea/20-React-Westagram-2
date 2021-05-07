import React from 'react';
import Article from '../article/Article';
import InstaStory from '../../Components/InstaStory/InstaStory';
import './Feeds.scss';

class Feeds extends React.Component {
  render() {
    return (
      <div className="feeds">
        <InstaStory />
        <Article />
      </div>
    );
  }
}

export default Feeds;
