import constants from './../constants';
const { c } = constants;

function currentUserReducer(state = {}, action) {
  switch(action.type) {
    case c.RESET_USER:
      return action.payload;
    case c.SET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default currentUserReducer;
