import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import { Provider } from 'react-redux';
import firebase from 'firebase';
import App from './App';
import rootReducer from './redux/reducers';
// import { jsonResponse } from './tempData';
import constants from './redux/constants';

// const { c } = constants;

const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

// const usersRef = firebase.database().ref('users').once('value').then((snapshot)=> snapshot.val());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  rootReducer,
  {
    currentModal: '',
    masterUserList: {}
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
