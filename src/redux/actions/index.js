import * as types from './../constants/actionTypes';

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
