import firebase from 'firebase';
import constants from './../constants';
import * as types from './../constants/actionTypes';

const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export function openAddModal() {
  return {
    type: types.ADD_USER,
    payload: 'ADD_USER'
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL,
    payload: ''
  }
}
