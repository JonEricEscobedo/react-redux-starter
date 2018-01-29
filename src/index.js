// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './browser/App/components/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

if (rootEl === null) {
  throw new Error('Root not found');
}

ReactDOM.render(<App />, rootEl);

registerServiceWorker();
