import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root';
import GlobalStyle from 'theme/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
