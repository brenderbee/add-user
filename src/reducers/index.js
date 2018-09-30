import userListReducer from './user-list-reducer';
import currentModalReducer from './current-modal-reducer';
import currentUserReducer from './current-user-reducer';
import loginEmailReducer from './login-email-reducer';
import loginPasswordReducer from './login-password-reducer';
import loadingReducer from './loading-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterUserList: userListReducer,
  currentModal: currentModalReducer,
  currentUser: currentUserReducer,
  loginEmail: loginEmailReducer,
  loginPassword: loginPasswordReducer,
  loading: loadingReducer
});

export default rootReducer;
