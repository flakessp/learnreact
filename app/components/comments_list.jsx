import React from 'react';
import Comment from './comment';

export default class CommentsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  getBody(){
    const { comments } = this.props;
    const {isOpen} = this.state;
    const articleId = this.props.articleId;
    if (!isOpen) return null;
    const commentsComponents = comments.map((comment) => {
      return <li>
        <Comment
          key = {articleId + comment.id}
          comment = {comment}
        />
    </li>;
    });
    return commentsComponents;
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <ul>
        <a href="#" onClick = {this.toggleOpen.bind(this)}>Show Comments</a>
        {this.getBody()}
      </ul>
    );
  }
}

CommentsList.propTypes = {
  comments: React.PropTypes.array.isRequired,
  articleId: React.PropTypes.string
};
