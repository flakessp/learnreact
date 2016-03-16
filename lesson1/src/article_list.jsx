import React from 'react';
import Article from './article.jsx';

class ArticleList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: []
    }
  }
  render(){
    const articleComponents = this.props.articles.map((article) => {
      return (
        <li key={article.id}>
          <Article
            isSelected = {this.state.selected.includes(article.id)}
            article={article}
            onClick={this.selectArticle(article.id).bind(this)}/>
        </li>
      )
    });
    return (
      <ul>
        {articleComponents}
      </ul>
    )
  }

  selectArticle(id) {
    return (ev) => {
      if(ev) ev.preventDefault();
      this.setState({
        selected: this.state.selected.concat(id)
      })
    }
  }
}

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired
};

export default ArticleList;