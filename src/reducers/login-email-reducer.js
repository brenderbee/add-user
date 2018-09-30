import constants from './../constants';
const { c } = constants;

function loginEmailReducer(state = '', action) {
  switch(action.type) {
    case c.EMAIL_AUTH:
      return action.payload;
    default:
      return state;
  }
}

export default loginEmailReducer;
