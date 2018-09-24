import React from 'react';
import { DialogContent, TextField } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ModalFooter } from './';
import { closeModal, addUser } from './../../redux/actions';

function ModalForm(props) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.sendNewUser({email: 'hello'});
    props.sendCloseModal();
  }

  return (
    <DialogContent>
      <form onSubmit={handleFormSubmit}>
        <TextField
          autoFocus
          margin="normal"
          id="first-name"
          label="First Name"
          type="text"
          value={props.firstName}
          fullWidth
        />
        <TextField
          autoFocus
          margin="normal"
          id="last-name"
          label="Last Name"
          type="text"
          value={props.lastName}
          fullWidth
        />
        <TextField
          autoFocus
          margin="normal"
          id="name"
          label="Email Address"
          type="email"
          value={props.email}
          fullWidth
        />
        <ModalFooter onFormSubmit={handleFormSubmit}/>
      </form>
    </DialogContent>
  );
}

ModalForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

const mapStateToProps = state => ({
  currentModal: state.currentModal,
  masterUserList: state.masterUserList
});

const mapDispatchToProps = dispatch => ({
  sendCloseModal: () => dispatch(closeModal()),
  sendNewUser: (newUser) => dispatch(addUser(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
