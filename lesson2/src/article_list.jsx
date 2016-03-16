import React from 'react';
import Article from './article.jsx';

class ArticleList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      opened: null
    }
  }
  render(){
    const articleComponents = this.props.articles.map((article) => {
      return (
        <li key={article.id}>
          <Article
            isOpen = {this.state.opened}
            article={article}
            onClick={this.toggleOpen(article.id).bind(this)}/>
        </li>
      )
    });
    return (
      <ul>
        {articleComponents}
      </ul>
    )
  }
  toggleOpen(id) {
    return (ev) =>{
      if(id==this.state.opened){
        this.setState({
          opened: null
        })
      }
      else{
        this.setState({
          opened: id
        })
      }
    }
  }
}

ArticleList.propTypes = {
  articles: React.PropTypes.array.isRequired
};

export default ArticleList;