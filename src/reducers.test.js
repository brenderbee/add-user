import currentModalReducer from './redux/reducers/current-modal-reducer';
import rootReducer from './redux/reducers/';

describe('Add User App', () => {
  const initialStateModal = {
    currentModal: null
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

  const initialState = {
    currentModal: null,
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

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialStateModal, { type: null })).toEqual(initialStateModal);
    });
  });

});
