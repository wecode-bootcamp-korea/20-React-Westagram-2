import React from 'react';

class AddComment extends React.Component {
  render() {
    const { name, content, isLiked } = this.props;
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
          <button className={isLiked && 'isLiked'}>
            {isLiked ? (
              <i class="fas fa-heart"></i>
            ) : (
              <i class="far fa-heart"></i>
            )}
          </button>
        </div>
      </>
    );
  }
}

AddComment.defaultProps = {
  name: 'yurim4545',
};

export default AddComment;
