import React from 'react';
import './Feeds.scss';
import Article from '../article/Article';
import InstaStory from '../../Components/InstaStory/InstaStory';

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
