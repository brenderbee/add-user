import userListReducer from './user-list-reducer';
import currentModalReducer from './current-modal-reducer';
import currentUserReducer from './current-user-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterUserList: userListReducer,
  currentModal: currentModalReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
