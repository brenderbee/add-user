import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { ModalForm } from './';

function Modal(props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle id="form-dialog-title">{props.dialogTitle}</DialogTitle>
      <ModalForm
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
      />
    </Dialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  dialogTitle: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

export default Modal;
