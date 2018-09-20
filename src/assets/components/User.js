import React, { Fragment } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';
import { UserActions, UserImage } from './';

function User() {
  return (
    <Fragment>
      <ListItem>
        <UserImage />
        <ListItemText
          primary="Last, First"
          secondary="test@gmail.com"
        />
        <UserActions />
      </ListItem>
      <Divider />
    </Fragment>
  );
}

export default User;
