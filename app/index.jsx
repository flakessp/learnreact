import React from 'react';
import ReactDom from 'react-dom';
import Article from './components/article.jsx';
import ArticleList from './components/article_list.jsx';

import articles from './fixtures';

ReactDom.render(<ArticleList articles={articles}/>, document.getElementById('app'));
