import constants from './../constants';
// const { c } = constants;

// import firebase from 'firebase';
// const { firebaseConfig } = constants;

// firebase.initializeApp(firebaseConfig);
// const initialState ={
//   masterUserList: firebase.database().ref('users').once('value').then((snapshot)=> snapshot.val())
// }

function userListReducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default userListReducer;
