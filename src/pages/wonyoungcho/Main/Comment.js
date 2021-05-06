import React from 'react';
import './Main.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="postUser">
        {this.props.replies.map(event => (
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
