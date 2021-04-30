import React from 'react';
import InstaStoryProfile from '../InstaStory_profile/InstaStory_profile';
import '../InstaStory/InstaStory.scss';
import '../../../Style/Common.scss';

class InstaStory extends React.Component {
  render() {
    return (
      <div className="instaStory">
        <InstaStoryProfile />
        <InstaStoryProfile />
        <InstaStoryProfile />
        <InstaStoryProfile />
        <InstaStoryProfile />
        <InstaStoryProfile />
      </div>
    );
  }
}

export default InstaStory;
