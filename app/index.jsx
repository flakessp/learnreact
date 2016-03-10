import React from 'react';
import ReactDom from 'react-dom';
import ArticleList from './components/article_list.jsx';

import articles from './fixtures';

ReactDom.render(<ArticleList articles={articles}/>, document.getElementById('app'));

// TODO: [21:00:01] <Roman > 1) Сделать компонент списка коментариев
// [21:00:23] <Roman > 2) сделать функциона открытия/закрытия списка коментариев
// [21:00:56] <Roman > 3) Сделать так, чтоб открыта была только одна статья
