import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './../css/UserActions.css';

function UserActions() {
  return (
    <div>
      <Button
        className="user-button"
        variant="outlined"
        color="primary"
        size="small"
      >
        Delete
        <DeleteIcon className="user-icon"/>
      </Button>
      <Button
        className="user-button"
        variant="outlined"
        color="secondary"
        size="small"
      >
        Edit
        <EditIcon className="user-icon"/>
      </Button>
    </div>
  );
}

export default UserActions;
