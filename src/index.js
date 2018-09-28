import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  rootReducer,
  {
    currentModal: '',
    masterUserList: {},
    currentUser: {},
    loginEmail: '',
    loginPassword: '',
    loginError: '',
    loading: false
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
