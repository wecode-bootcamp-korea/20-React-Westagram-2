import React from 'react';

class Comment extends React.Component {
  render() {
    const { name, content } = this.props;
    return (
      <>
        <div className="delList">
          <div>
            <span>{name}</span>
            {content}
            <span class="delBtn">
              <i class="fas fa-times"></i>
            </span>
          </div>
          <button>
            <i class="far fa-heart"></i>
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
