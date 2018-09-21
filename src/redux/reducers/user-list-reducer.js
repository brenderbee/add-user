import constants from './../constants';

const { c } = constants;

const initialState ={
  masterUserList: {}
}

function userListReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default userListReducer;
