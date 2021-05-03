import React, { Component } from 'react';

class AddComment extends Component {
  render() {
    const { newComment } = this.props;
    return (
      <div className="delList">
        <div>
          <span>yurim4545</span>
          {newComment.text}
          <span class="delBtn">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <button>
          <i class="far fa-heart"></i>
        </button>
      </div>
    );
  }
}

export default AddComment;
