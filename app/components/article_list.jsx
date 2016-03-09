import React from 'react';
import Article from './article.jsx';

export default class ArticleList extends React.Component {
  render() {
    const articleComponents = this.props.articles.map((article) => {
      return <li key = {article.id}>
        <Article article = {article} />
      </li>
    });
    return(
      <ul>
        {articleComponents}
      </ul>
    );
  }
};

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired
}
