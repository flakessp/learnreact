import React from 'react';
import ReactDOM from 'react-dom';
import Article from './article.jsx';
import ArticleList from './article_list.jsx';
import fixtures from './fixtures'

ReactDOM.render(<ArticleList articles={fixtures}/>, document.getElementById('app'));