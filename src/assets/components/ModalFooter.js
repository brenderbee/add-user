import React from 'react';
import Proptypes from 'prop-types';
import { Button, DialogActions } from '@material-ui/core/';
import { connect } from 'react-redux';
import { closeModal } from './../../redux/actions';

function ModalFooter(props) {

  const handleCloseModal = () => {
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
      <Button color="primary">
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
  sendCloseModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter);
