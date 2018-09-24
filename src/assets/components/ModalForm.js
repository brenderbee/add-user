import React from 'react';
import { DialogContent, TextField } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { ModalFooter } from './';
import { closeModal, addUser } from './../../redux/actions';

function ModalForm(props) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputFirst = event.target.querySelector('#first-name').value.trim(),
          inputLast = event.target.querySelector('#last-name').value.trim(),
          inputEmail = event.target.querySelector('#email').value.trim(),
          newId = v4();
    props.sendNewUser({
      first_name: inputFirst,
      last_name: inputLast,
      email: inputEmail,
      id: newId
    });
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
          fullWidth
        />
        <TextField
          autoFocus
          margin="normal"
          id="last-name"
          label="Last Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="normal"
          id="email"
          label="Email Address"
          type="email"
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

const mapDispatchToProps = dispatch => ({
  sendCloseModal: () => dispatch(closeModal()),
  sendNewUser: (newUser) => dispatch(addUser(newUser))
});

export default connect(null, mapDispatchToProps)(ModalForm);
