import firebase from 'firebase';
import { orderBy } from 'lodash';
import * as types from './../constants/actionTypes';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database();
const usersRef = databaseRef.ref('users');

// Actions on modal
export function openAddModal() {
  return {
    type: types.ADD_MODAL
  }
}

export function openEditModal() {
  return {
    type: types.EDIT_MODAL
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}

// Actions on Authentication
export function updateLoginEmail(email) {
  return {
    type: types.EMAIL_AUTH,
    payload: email
  }
}

export function resetLoginEmail() {
  return {
    type: types.EMAIL_LOGOUT
  }
}

export function updateLoginPassword(password) {
  return {
    type: types.PASSWORD_AUTH,
    payload: password
  }
}

export function resetLoginPassword() {
  return {
    type: types.PASSWORD_LOGOUT
  }
}

export function updateLoginError() {

}

export function updateLoading() {

}

export const loginClient = () => async dispatch => {

}

// Actions on firebase database
export const fetchUsers = () => async dispatch => {
  usersRef.on('value', snapshot => {
    dispatch({
      type: types.FETCH_USERS,
      payload: orderBy(snapshot.val(), 'last_name', 'asc')
    });
  });
};

export const addUser = (newUser, newUserId) => async dispatch => {
  usersRef.child(newUserId).set(newUser);
};

export const deleteUser = currentUserId => async dispatch => {
  usersRef.child(currentUserId).remove();
};

export function setCurrentUser(selectedUser) {
  return {
    type: types.SET_USER,
    payload: selectedUser
  }
}

export function resetCurrentUser() {
  return {
    type: types.SET_USER,
    payload: {}
  }
}

export const updateUser = (updatedUser, userId) => async dispatch => {
  usersRef.child(userId).update(updatedUser);
};
