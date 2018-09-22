import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, {
  modalDisplay: false
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
