import constants from './../constants';
const { c } = constants;

function modalDisplayReducer(state = {}, action) {
  switch(action.type) {
    case c.OPEN_MODAL:
      return true;
    case c.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}

export default modalDisplayReducer;
