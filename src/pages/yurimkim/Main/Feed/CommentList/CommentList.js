import React from 'react';
import AddComment from './addComment/addComment';
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
    const { content } = this.state;
    return (
      <>
        <div className="commentList">
          {this.state.addComment.map((el, index) => {
            return (
              <AddComment addComment={this.state.addComment} key={index} />
            );
          })}
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
            value={content}
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
