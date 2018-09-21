import constants from './../constants';
import firebase from 'firebase';
import constants from './../constants';

const { firebaseConfig } = constants;
const { c } = constants;

firebase.initializeApp(firebaseConfig);

const initialState ={
  masterUserList: firebase.database().ref('users').once('value').then((snapshot)=> snapshot.val())
}

function userListReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default userListReducer;
