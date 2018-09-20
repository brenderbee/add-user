import React from 'react';
import { List } from '@material-ui/core';
import { User } from './';

function UserList() {
  return (
    <div>
      <List>
        <User />
      </List>
    </div>
  );
}

export default UserList;
