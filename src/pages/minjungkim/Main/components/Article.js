import React, { Component } from 'react';
import FeedHeader from './FeedHeader';
import NewComment from './NewComment';
import FeedContent from './FeedContent';

class Article extends Component {
  render() {
    return (
      <article className="feed">
        <FeedHeader />
        <img
          className="feed_image"
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/174153253_826643891395598_4002572279753014475_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Mx9u_wsRG3IAX_TitLe&edm=AP_V10EAAAAA&ccb=7-4&oh=783c47488c7d08128946936695772b94&oe=60A2E9CF&_nc_sid=4f375e"
          alt="Hawaii"
        />
        <FeedContent />
        <NewComment />
      </article>
    );
  }
}

export default Article;
