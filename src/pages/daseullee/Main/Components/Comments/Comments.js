import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <div className="instaPost_mainContent">
        <div className="instaPost_content">
          <p className="instaPost_id">meow_meow</p>
          <p>{this.props.commentsContent}</p>
        </div>
      </div>
    );
  }
}
export default Comments;
