import React from 'react';

import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';

import RootReducer from './reducers';

let store = createStore(RootReducer);

let rootElement = document.getElementById('app-root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
