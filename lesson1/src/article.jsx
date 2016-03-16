import React from 'react';

class Article extends React.Component {
  render(){
    const {article, isOpen, onClick} = this.props;
    return (
      <div>
        <h1 onClick={onClick}>{article.title}</h1>
        {this.getBody()}
      </div>
      )
  }

  getBody() {
    const {article, isOpen} = this.props;
    if (isOpen!=article.id) return null;
    return <section>{article.text}</section>;
  }
}

export default Article;