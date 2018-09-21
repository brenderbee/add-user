import userListReducer from './ticket-list-reducer';
import modalDisplayReducer from './modal-display-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterUserList: userListReducer,
  modalDisplay: modalDisplayReducer
});

export default rootReducer;
