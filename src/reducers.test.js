import { createStore } from 'redux';
import constants from "./redux/constants";
import modalDisplayReducer from './redux/reducers/modal-display-reducer';
import rootReducer from './redux/reducers/';

describe('Add User App', () => {
  const { initialState } = constants;
  // const store = createStore(rootReducer, initialState);

  const modalState = { modalDisplay: false };

  describe('modalDisplayReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(modalDisplayReducer(modalState, { type: null })).toEqual(modalState);
    });

    it('Should change intial state to true.', () => {
      expect(modalDisplayReducer(modalState, { type: 'OPEN_MODAL', payload: true })).toEqual({ modalDisplay: true });
    });

    it('Should change intial state to false.', () => {
      expect(modalDisplayReducer(modalState, { type: 'CLOSE_MODAL', payload: false })).toEqual({ modalDisplay: false });
    });

  });

  // describe('rootReducer', () => {
  //   it('Should accept and return initial state.', () => {
  //     expect(rootReducer(initialState, { type: null })).toEqual(initialState);
  //   });
  //
  //   it('Should contain logic from both reducers.', () => {
  //     expect(store.getState().modalDisplay.toEqual(modalDisplayReducer(undefined, { type: null }));
  //   });
  // });

});
