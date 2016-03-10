import React from 'react';
import CommentsList from './comments_list';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  getBody(){
    const { article } = this.props;
    const { isOpen } = this.state;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentsList comments = {article.comments} articleId={article.id} />
      </section>
    );
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  eventStack() {
    this.props.onClick();
    this.toggleOpen();
  }

  render() {
    const { article, isSelected} = this.props;
    const style = isSelected ? {color: 'red'} : null;

    return (
      <div style={style}>
        <h3 onClick = {this.eventStack.bind(this)}>{ article.title }</h3>
        {this.getBody()}
      </div>
    );
  }
}
