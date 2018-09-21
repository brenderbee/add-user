import React from 'react';
import { DialogContent, TextField } from '@material-ui/core/';
import PropTypes from 'prop-types';

function ModalForm(props) {
  return (
    <DialogContent>
      <TextField
        autoFocus
        margin="normal"
        id="first-name"
        label="First Name"
        type="text"
        value={props.firstName}
        fullWidth
        required
        />
      <TextField
        autoFocus
        margin="normal"
        id="last-name"
        label="Last Name"
        type="text"
        value={props.lastName}
        fullWidth
        required
      />
      <TextField
        autoFocus
        margin="normal"
        id="name"
        label="Email Address"
        type="email"
        value={props.email}
        fullWidth
        required
      />
    </DialogContent>
  );
}

ModalForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

export default ModalForm;
