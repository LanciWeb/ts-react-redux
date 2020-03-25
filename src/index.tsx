import React from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App color="red" />
  </Provider>,
  document.getElementById('root')
);
