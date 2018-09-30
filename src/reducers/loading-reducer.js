import constants from './../constants';
const { c } = constants;

function loadingReducer(state = false, action) {
  switch(action.type) {
    case c.LOADING:
      return true;
    case c.LOADING_COMPLETE:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
