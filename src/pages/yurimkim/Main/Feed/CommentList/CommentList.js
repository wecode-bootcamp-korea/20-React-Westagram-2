import React from 'react';
import Comment from './addComment/comment';
import AddComment from './addComment/addComment';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      addComment: [],
      newComment: [{ id: 0, text: '' }],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          addComment: data,
        });
      });
  }

  handleContent = e => {
    this.setState({ content: e.target.value });
  };

  addComment = () => {
    this.setState({
      newComment: [
        ...this.state.newComment,
        { id: this.state.id + 1, text: this.state.content },
      ],
      content: '',
    });
  };

  render() {
    const { content, addComment, newComment } = this.state;
    return (
      <>
        <div className="commentList">
          {addComment.map(el => {
            return (
              <Comment key={el.id} name={el.userName} content={el.content} />
            );
          })}

          {newComment.map(el => {
            return (
              <AddComment newComment={(newComment, el)} key={newComment.id} />
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
            className={content ? 'addBtnColor' : 'addBtn'}
          >
            게시
          </button>
        </section>
      </>
    );
  }
}

export default CommentList;
