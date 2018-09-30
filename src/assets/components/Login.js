import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,
  TextField,
  Typography,
  CircularProgress
} from '@material-ui/core/';
import './../css/Login.css';
import { updateLoginEmail, updateLoginPassword } from './../../actions';

function Login(props) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputEmail = event.target.querySelector('#login-email').value.trim(),
          inputPassword = event.target.querySelector('#login-password').value.trim();
    props.sendLoginEmail(inputEmail);
    props.sendLoginPassword(inputPassword);
  }

  return (
    <div className="login">
      <CircularProgress />
      <Typography variant="headline">Login</Typography>
      <Typography variant="caption">enter credentials to access app</Typography>
      <form onSubmit={handleFormSubmit}>
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
        <Button
          variant="outlined"
          color="primary"
          size="small"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

Login.propTypes = {
  sendLoginEmail: PropTypes.func,
  sendLoginPassword: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  sendLoginEmail: (email) => dispatch(updateLoginEmail(email)),
  sendLoginPassword: (password) => dispatch(updateLoginPassword(password))
});

export default connect(null, mapDispatchToProps)(Login);
