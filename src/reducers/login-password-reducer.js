import constants from './../constants';
const { c } = constants;

function loginPasswordReducer(state = '', action) {
  switch(action.type) {
    case c.PASSWORD_AUTH:
      return action.payload;
    case c.PASSWORD_LOGOUT:
      return '';
    default:
      return state;
  }
}

export default loginPasswordReducer;
