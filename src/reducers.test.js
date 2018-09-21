import { createStore } from 'redux';
import constants from "./redux/constants";
import modalDisplayReducer from './redux/reducers/modal-display-reducer';
import rootReducer from './redux/reducers/';

describe('Add User App', () => {
  const initialStateModal = {
    modalDisplay: false
  };

  const initialStateUserList = {
    masterUserList: {
      random: {
        id: '0',
        first_name: 'Fenneko',
        last_name: 'Fox',
        email: 'monotone@example.com'
      },
      random2: {
        id: '1',
        first_name: 'Restuko',
        last_name: 'Panda',
        email: 'aggrestuko@example.com'
      },
      random3: {
        id: '2',
        first_name: 'Ton',
        last_name: 'Pig',
        email: 'bossman@example.com'
      }
    }
  };

  describe('modalDisplayReducer', () => {
    it('Should accept and return modalDisplay initial state.', () => {
      expect(modalDisplayReducer(initialStateModal, { type: null })).toEqual(initialStateModal);
    });

    it('Should change intial state of modalDisplay to true.', () => {
      expect(modalDisplayReducer(initialStateModal, { type: 'OPEN_MODAL', payload: true })).toEqual({ modalDisplay: true });
    });

    it('Should change state of modalDisplay to false.', () => {
      expect(modalDisplayReducer(initialStateModal, { type: 'CLOSE_MODAL', payload: false })).toEqual({ modalDisplay: false });
    });

  });

  // describe('rootReducer', () => {
  //   it('Should accept and return initial state.', () => {
  //     expect(rootReducer(initialState, { type: null })).toEqual(initialState);
  //   });

    // it('Should contain logic from both reducers.', () => {
    //   expect(store.getState().modalDisplay.toEqual(modalDisplayReducer(undefined, { type: null }));
    // });
  // });

});
