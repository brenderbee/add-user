import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core/';
import { ModalFooter, ModalForm } from './';

function Table() {
  return (
    <Dialog open={true}>
      <DialogTitle id="form-dialog-title">Add User</DialogTitle>
      <ModalFooter />
      <ModalForm />
    </Dialog>
  );
}

export default Table;
