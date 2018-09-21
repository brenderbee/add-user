import constants from './../constants';
const { c } = constants;

const initialState ={
  modalDisplay: false
}

function modalDisplayReducer(state = initialState, action) {
  switch(action.type) {
    case c.OPEN_MODAL:
      return Object.assign({}, state, { modalDisplay: action.payload });
    case c.CLOSE_MODAL:
      return Object.assgin({}, state, { modalDisplay: action.payload });
    default:
      return state;
  }
}

export default modalDisplayReducer;
