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
          firstName=""
          lastName=""
          email=""
        />
      );
    case 'EDIT_USER':
      return (
        <Modal
          open={true}
          dialogTitle="Edit User"
          firstName={props.currentUser.first_name}
          lastName={props.currentUser.last_name}
          email={props.currentUser.email}
        />
      );
    default:
      return (
        <Modal
          open={false}
          dialogTitle=""
          firstName=""
          lastName=""
          email=""
        />
      );
  }
}

ModalConductor.propTypes = {
  currentModal: PropTypes.string,
  currentUser: PropTypes.object
};

const mapStateToProps = state => ({
  currentModal: state.currentModal,
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(ModalConductor);
