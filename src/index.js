import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { App } from './features/App';

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById('root'),
);
