import constants from './../constants';
const { c } = constants;

function currentModalReducer(state = {}, action) {
  switch(action.type) {
    case c.ADD_USER:
      return 'ADD_USER';
    case c.EDIT_USER:
      return 'EDIT_USER';
    case c.CLOSE_MODAL:
      return '';
    default:
      return state;
  }
}

export default currentModalReducer;
