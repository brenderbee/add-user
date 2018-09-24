import React from 'react';
import Proptypes from 'prop-types';
import { Button, DialogActions } from '@material-ui/core/';
import { connect } from 'react-redux';
import { closeModal } from './../../redux/actions';

function ModalFooter(props) {

  const handleCloseModal = () => {
    props.sendCloseModal();
  }

  const renderActionText = () => {
    if (props.currentModal === 'ADD_USER') {
      return 'add';
    } else if ( props.currentModal === 'EDIT_USER') {
      return 'edit';
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter);
