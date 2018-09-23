import userListReducer from './user-list-reducer';
import currentModalReducer from './current-modal-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterUserList: userListReducer,
  currentModal: currentModalReducer
});

export default rootReducer;
