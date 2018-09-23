import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from './';

function ModalConductor(props) {
  switch (props.currentModal) {
    case 'ADD_USER':
      return (
        <Modal
          open={true}
          dialogTitle="Add User"
          firstName={null}
          lastName={null}
          email={null}
        />
      );
    case 'EDIT_USER':
      return (
        <Modal
          open={true}
          dialogTitle="Edit User"
          firstName="first"
          lastName="last"
          email="test@example.com"
        />
      );
    default:
      return (
        <Modal
          open={false}
        />
      );
  }
}

ModalConductor.propTypes = {
  currentModal: PropTypes.string
};

const mapStateToProps = state => ({
  currentModal: state.currentModal
})

export default connect(mapStateToProps)(ModalConductor);
