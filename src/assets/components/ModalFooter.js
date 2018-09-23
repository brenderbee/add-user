import React from 'react';
import PropTypes from 'prop-types';
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

ModalFooter.propTypes = {
  currentModal: PropTypes.string,
  sendCloseModal: PropTypes.func
}

const mapStateToProps = state => ({
  currentModal: ModalFooter(state.currentModal)
});

const mapDispatchToProps = dispatch => ({
  sendCloseModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter);
