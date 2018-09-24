import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core';
import { UserActions, UserImage } from './';

function User(props) {
  return (
    <Fragment>
      <ListItem>
        <UserImage />
        <ListItemText
          primary={props.lastName + ', ' + props.firstName}
          secondary={props.email}
        />
      <UserActions currentUserId={props.currentUserId}/>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

User.proptypes = {
  firstName: Proptypes.string,
  lastName: Proptypes.string,
  email: Proptypes.string,
  currentUserId: Proptypes.string
}

export default User;
