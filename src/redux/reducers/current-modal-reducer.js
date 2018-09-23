import constants from './../constants';
const { c } = constants;

function currentModalReducer(state = {}, action) {
  switch(action.type) {
    case c.ADD_USER:
      return 'ADD_USER';
    default:
      return state;
  }
}

export default currentModalReducer;
