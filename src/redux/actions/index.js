import firebase from 'firebase';
import * as types from './../constants/actionTypes';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database();
const usersRef = databaseRef.ref('users');

export function openAddModal() {
  return {
    type: types.ADD_USER
  }
}

export function openEditModal() {
  return {
    type: types.EDIT_USER
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}

export const fetchUsers = () => async dispatch => {
  usersRef.on('value', snapshot => {
    dispatch({
      type: types.FETCH_USERS,
      payload: snapshot.val()
    });
  });
};

export const addUser = (newUser, newUserId) => async dispatch => {
  usersRef.child(newUserId).set(newUser);
};

export const deleteUser = currentUserId => async dispatch => {
  usersRef.child(currentUserId).remove();
};
