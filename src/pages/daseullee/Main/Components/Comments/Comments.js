import React from 'react';

class Comments extends React.Component {
  render() {
    const { mockdataName, mockdataComments } = this.props;
    return (
      <div className="instaPost_mainContent">
        <div className="instaPost_content">
          <p className="instaPost_id">{mockdataName}</p>
          <p>{mockdataComments}</p>
        </div>
      </div>
    );
  }
}
export default Comments;
