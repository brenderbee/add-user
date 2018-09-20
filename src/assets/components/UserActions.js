import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function UserActions() {
  return (
    <div>
      <Button variant="outlined" color="primary">
        Delete
        <DeleteIcon />
      </Button>
      <Button variant="outlined" color="secondary">
        Edit
        <EditIcon />
      </Button>
    </div>
  );
}

export default UserActions;
