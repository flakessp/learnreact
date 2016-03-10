import React from 'react';
import Comment from './comment';

export default class CommentsList extends React.Component {
  render() {
    const commentsComponents = this.props.comments.map((comment) => {
      return <li><p key = {comment.id}>
        <Comment
          comment = {comment}
        />
    </p></li>;
    });
    return(
      <ul>
        {commentsComponents}
      </ul>
    );
  }
}

CommentsList.propTypes = {
  comments: React.PropTypes.array.isRequired
};
