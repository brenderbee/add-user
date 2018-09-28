import React, { Fragment } from 'react';
import { FormControl, TextField } from '@material-ui/core/';

function Login() {
  return (
    <Fragment>
      <FormControl>
        <TextField
          autoFocus
          margin="normal"
          id="login-email"
          label="Email"
          type="text"
          fullWidth
          required
        />
        <TextField
          margin="normal"
          id="login-password"
          label="password"
          type="text"
          fullWidth
          required
        />
      </FormControl>
    </Fragment>
  );
}

export default Login;
