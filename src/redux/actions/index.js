import firebase from 'firebase';
import constants from './../constants';
import * as types from "./../constants/ActionTypes";

const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export function openModal() {
  return {
    type: types.OPEN_MODAL,
    payload: true
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL,
    payload: false
  }
}
