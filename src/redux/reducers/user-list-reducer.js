import constants from './../constants';
const { c } = constants;

function userListReducer(state = {}, action) {
  switch(action.type) {
    case c.FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
}

export default userListReducer;
