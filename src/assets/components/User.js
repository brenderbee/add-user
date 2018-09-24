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
      <UserActions currentUser={props.currentUser}/>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

User.proptypes = {
  firstName: Proptypes.string,
  lastName: Proptypes.string,
  email: Proptypes.string,
  currentUser: Proptypes.object
}

export default User;
