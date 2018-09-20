import React from 'react';
import { Avatar } from '@material-ui/core/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function UserImage() {
  return (
    <Avatar>
      <AccountCircleIcon />
    </Avatar>
  );
}

export default UserImage;
