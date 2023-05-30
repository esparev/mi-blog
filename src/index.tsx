import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, Reducer } from 'redux';
import reducer from './reducers/index.reducer';
import App from './routes/App';
import initialState from '../initialState';

type ActionProps = {
  type: string;
  payload: string | undefined;
};

declare const window: CustomWindow;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer as Reducer<BlogPosts, ActionProps>, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
