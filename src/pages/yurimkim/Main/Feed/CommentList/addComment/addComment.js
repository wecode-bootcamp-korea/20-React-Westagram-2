import React from 'react';

class AddComment extends React.Component {
  render() {
    console.log(this.props.addComment);
    return (
      <>
        <div className="delList">
          <div>
            <span>yurim4545</span>
            {this.props.addComment.text}
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

export default AddComment;
