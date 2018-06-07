// React
import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto/index.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

// For Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, rootEl);
  });
}

registerServiceWorker();
