import React from 'react';
import Article from './article.jsx';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }

  selectArticle(id) {
    return (ev) =>{
      if (ev) ev.preventDefault();
      this.setState({
        selected: id
      });
    };
  }

  render() {
    const articleComponents = this.props.articles.map((article) => {
      return <li key = {article.id}>
        <Article
            onClick={this.selectArticle(article.id).bind(this)}
            isSelected = {this.state.selected == article.id}
            article = {article}
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
