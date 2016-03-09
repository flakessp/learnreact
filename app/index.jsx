import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

import articles from './fixtures';

ReactDom.render(<App article={articles[0]}/>, document.getElementById('app'));
