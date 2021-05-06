import React from 'react';
import AddComment from './addComment/addComment';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      addComment: [],
      newComment: [],
    };
  }

  componentDidMount() {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(feedData => {
        this.setState({
          addComment: feedData,
        });
      });
  }

  handleContent = e => {
    const { value } = e.target;
    this.setState({ content: value });
  };

  addComment = e => {
    e.preventDefault();
    const { addComment, content } = this.state;
    this.setState({
      addComment: [...addComment, { content: content }],
      content: '',
    });
  };

  render() {
    const { content, addComment } = this.state;

    return (
      <>
        <div className="commentList">
          {addComment.map(el => {
            return (
              <AddComment
                key={el.id}
                name={el.userName}
                content={el.content}
                isLiked={el.isLiked}
              />
            );
          })}
        </div>
        <section className="addComment">
          <form onSubmit={this.addComment}>
            <input
              onChange={this.handleContent}
              className="textarea"
              value={content}
              placeholder="😀댓글 달기..."
            />
            <button className={content ? 'addBtnColor' : 'addBtn'}>게시</button>
          </form>
        </section>
      </>
    );
  }
}

export default CommentList;
