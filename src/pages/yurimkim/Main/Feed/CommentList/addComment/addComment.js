import React from 'react';

class AddComment extends React.Component {
  render() {
    return (
      <>
        <div className="delList">
          <div>
            <span>yurim4545</span>
            일이삼사오육칠팔구십,😂
            <span className="delBtn">
              <i class="fas fa-times"></i>
            </span>
          </div>
          <button>
            <i class="far fa-heart"></i>
          </button>
        </div>
        {this.props.addComment.map(e => {
          return (
            <div className="delList">
              <div>
                <span>yurim4545</span>
                {e.text}
                <span class="delBtn">
                  <i class="fas fa-times"></i>
                </span>
              </div>
              <button>
                <i class="far fa-heart"></i>
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default AddComment;
