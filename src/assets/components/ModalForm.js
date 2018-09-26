import React from 'react';
import { DialogContent, TextField } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { ModalFooter } from './';
import { closeModal, addUser, updateUser } from './../../actions';

function ModalForm(props) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputFirst = event.target.querySelector('#first-name').value.trim(),
          inputLast = event.target.querySelector('#last-name').value.trim(),
          inputEmail = event.target.querySelector('#email').value.trim(),
          newId = v4();
    if (props.currentModal === 'EDIT_USER') {
      props.sendUpdatedUser({
        first_name: inputFirst,
        last_name: inputLast,
        email: inputEmail,
        id: props.currentUser.id
      }, props.currentUser.id);
    } else {
      props.sendNewUser({
        first_name: inputFirst,
        last_name: inputLast,
        email: inputEmail,
        id: newId
      }, newId);
    }
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
          defaultValue={props.firstName}
          fullWidth
          required
        />
        <TextField
          margin="normal"
          id="last-name"
          label="Last Name"
          type="text"
          defaultValue={props.lastName}
          fullWidth
          required
        />
        <TextField
          margin="normal"
          id="email"
          label="Email Address"
          type="email"
          defaultValue={props.email}
          fullWidth
          required
        />
        <ModalFooter onFormSubmit={handleFormSubmit}/>
      </form>
    </DialogContent>
  );
}

ModalForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  currentModal: PropTypes.string
};

const mapStateToProps = state => ({
  currentModal: state.currentModal,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  sendCloseModal: () => dispatch(closeModal()),
  sendNewUser: (newUser, newUserId) => dispatch(addUser(newUser, newUserId)),
  sendUpdatedUser: (updatedUser, userId) => dispatch(updateUser(updatedUser, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
