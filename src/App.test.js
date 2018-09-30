import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

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
  applyMiddleware(reduxThunk)
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
