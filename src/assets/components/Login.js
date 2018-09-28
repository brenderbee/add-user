import React from 'react';
import { TextField, Typography } from '@material-ui/core/';
import './../css/Login.css';

function Login() {
  return (
    <div className="login">
      <Typography variant="headline">Login</Typography>
      <Typography variant="caption">enter credentials to access app</Typography>
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
    </div>
  );
}

export default Login;
