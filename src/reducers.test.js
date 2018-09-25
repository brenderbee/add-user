import currentModalReducer from './redux/reducers/current-modal-reducer';
import userListReducer from './redux/reducers/current-modal-reducer';
import currentUserReducer from './redux/reducers/current-user-reducer';
import rootReducer from './redux/reducers/';

describe('Add User App', () => {
  const initialStateModal = {
    currentModal: ''
  };

  const initialStateUser = {
    currentUser: {}
  }

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

  const initialState = {
    currentModal: '',
    currentUser: {},
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

  describe('currentModalReducer', () => {
    it('Should accept and return currentModalReducer initial state.', () => {
      expect(currentModalReducer(initialStateModal, { type: null })).toEqual(initialStateModal);
    });

    it('Should change intial state of currentModalReducer to "ADD_USER".', () => {
      expect(currentModalReducer(initialStateModal, { type: 'ADD_USER', payload: 'ADD_USER' })).toEqual('ADD_USER');
    });

    it('Should change intial state of currentModalReducer to "EDIT_USER".', () => {
      expect(currentModalReducer(initialStateModal, { type: 'EDIT_USER', payload: 'EDIT_USER' })).toEqual('EDIT_USER');
    });

    it('Should change state of currentModalReducer to null.', () => {
      expect(currentModalReducer(initialStateModal, { type: 'CLOSE_MODAL', payload: '' })).toEqual('');
    });

  });

  describe('userListReducer', () => {
    it('Should accept and return userListReducer initial state.', () => {
      expect(userListReducer(initialStateUserList, { type: null })).toEqual(initialStateUserList);
    });
  });

  describe('currentUserReducer', () => {
    it('Should accept and return userListReducer initial state.', () => {
      expect(currentUserReducer(initialStateUser, { type: null })).toEqual(initialStateUser);
    });

    it('Should change intial state of currentUserReducer to a new object.', () => {
      expect(currentUserReducer(initialStateUser, { type: 'SET_USER', payload: { last_name: 'franco', first_name: 'Ramiro'} })).toEqual({ last_name: 'franco', first_name: 'Ramiro'});
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });
  });

});
