import React from 'react';
import Proptypes from 'prop-types';
import { Button, DialogActions } from '@material-ui/core/';
import { connect } from 'react-redux';
import { closeModal, addUser } from './../../redux/actions';

function ModalFooter(props) {

  const handleCloseModal = () => {
    props.sendCloseModal();
  }

  const handleAddUser = () => {
    props.sendNewUser({email: 'hello'});
    props.sendCloseModal();
  }

  return (
    <DialogActions>
      <Button
        onClick={handleCloseModal}
        color="primary"
      >
        Cancel
      </Button>
      <Button
        onClick={handleAddUser}
        color="primary"
      >
        Add
      </Button>
    </DialogActions>
  );
}

ModalFooter.proptypes = {
  currentModal: Proptypes.string,
  sendCloseModal: Proptypes.func
}

const mapStateToProps = state => ({
  currentModal: state.currentModal
});

const mapDispatchToProps = dispatch => ({
  sendCloseModal: () => dispatch(closeModal()),
  sendNewUser: (newUser) => dispatch(addUser(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter);
