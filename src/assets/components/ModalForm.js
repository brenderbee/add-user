import React from 'react';
import { DialogContent, TextField } from '@material-ui/core/';

function ModalForm() {
  return (
    <DialogContent>
      <TextField
        autoFocus
        margin="normal"
        id="last-name"
        label="Last Name"
        type="text"
        fullWidth
        required
      />
      <TextField
        autoFocus
        margin="normal"
        id="first-name"
        label="First Name"
        type="text"
        fullWidth
        required
      />
      <TextField
        autoFocus
        margin="normal"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
        required
      />
    </DialogContent>
  );
}

export default ModalForm;
