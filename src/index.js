import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

ReactDOM.render(
  <App chatName="Some Chat Name" />,
  document.getElementById('root')
);

registerServiceWorker();
