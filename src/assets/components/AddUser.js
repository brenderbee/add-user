import React from 'react';
import { Tooltip, Button } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';

function AddUser() {
  return (
    <div>
      <Tooltip title="Add">
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          mini={true}
        >
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

export default AddUser;
