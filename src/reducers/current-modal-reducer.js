import constants from './../constants';
const { c } = constants;

function currentModalReducer(state = {}, action) {
  switch(action.type) {
    case c.ADD_MODAL:
      return 'ADD_MODAL';
    case c.EDIT_MODAL:
      return 'EDIT_MODAL';
    case c.CLOSE_MODAL:
      return '';
    default:
      return state;
  }
}

export default currentModalReducer;
