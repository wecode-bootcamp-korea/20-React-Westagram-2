import React from 'react';
import addComment from './addComment/addComment';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      addComment: [],
    };
  }

  handleContent = e => {
    this.setState({ content: e.target.value });
  };

  addComment = () => {
    this.state.addComment.push({ text: this.state.content });
    this.setState({ content: '' });
  };

  render() {
    return (
      <>
        <div className="commentList">
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
          {this.state.addComment.map(e => {
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
          <addComment />
        </div>
        <section className="addComment">
          <input
            onChange={this.handleContent}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                this.addComment();
              }
            }}
            className="textarea"
            placeholder="😀댓글 달기..."
          />
          <button
            onClick={this.addComment}
            className={this.state.content ? 'addBtnColor' : 'addBtn'}
          >
            게시
          </button>
        </section>
      </>
    );
  }
}

export default CommentList;
