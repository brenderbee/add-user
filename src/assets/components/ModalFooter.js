import React from 'react';
import Proptypes from 'prop-types';
import { Button, DialogActions } from '@material-ui/core/';
import { connect } from 'react-redux';
import { closeModal, resetCurrentUser } from './../../actions';

function ModalFooter(props) {

  const handleCloseModal = () => {
    props.sendCloseModal();
    props.sendResetUser();
  }

  const renderActionText = () => {
    if (props.currentModal === 'ADD_MODAL') {
      return 'add';
    } else if ( props.currentModal === 'EDIT_MODAL') {
      return 'update';
    } else {
      return '';
    }
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
        type="submit"
        onSubmit={props.onFormSubmit}
        color="primary"
      >
        {renderActionText()}
      </Button>
    </DialogActions>
  );
}

ModalFooter.proptypes = {
  currentModal: Proptypes.string,
  sendCloseModal: Proptypes.func,
  onFormSubmit: Proptypes.func
}

const mapStateToProps = state => ({
  currentModal: state.currentModal
});

const mapDispatchToProps = dispatch => ({
  sendCloseModal: () => dispatch(closeModal()),
  sendResetUser: () => dispatch(resetCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter);
