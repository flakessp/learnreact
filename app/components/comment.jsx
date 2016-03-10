import React from 'react';

export default class Comment extends React.Component {
  getComment(){
    const comment = this.props.comment;
    return (
     <div> <b>{comment.name}</b> wrote : {comment.content}</div>
    );
  }
  render(){
    return <div>{this.getComment()}</div>;
  }
}

Comment.PropTypes = {
  comment: React.PropTypes.array.isRequired
};
