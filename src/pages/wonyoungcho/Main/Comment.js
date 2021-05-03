import React from 'react';
import './Main.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="postUser">
        {this.props.commentList.map(event => (
          <li>
            <a className="newComment" href="/#">
              {event.name}{' '}
            </a>
            {event.text}
          </li>
        ))}
      </div>
    );
  }
}
export default Comment;
