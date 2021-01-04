import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
