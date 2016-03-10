import React from 'react';
import Article from './article.jsx';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: []
    };
  }

  selectArticle(id) {
    return (ev) =>{
      if (ev) ev.preventDefault();
      if(this.state.opened.indexOf(id)==-1){
        this.setState({
          opened: this.state.opened.concat(id)
        });
      }
    };
  }

  render() {
    const articleComponents = this.props.articles.map((article) => {
      return <li key = {article.id}>
        <Article
          article = {article}
          onClick={this.selectArticle(article.id).bind(this)}
        />
      </li>;
    });
    return(
      <ul>
        {articleComponents}
      </ul>
    );
  }
}

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired
};
