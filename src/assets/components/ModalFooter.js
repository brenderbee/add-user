import React from 'react';
import { Button, DialogActions } from '@material-ui/core/';

function ModalFooter() {
  return (
    <DialogActions>
      <Button color="primary">
        Cancel
      </Button>
      <Button color="primary">
        Add
      </Button>
    </DialogActions>
  );
}

export default ModalFooter;
