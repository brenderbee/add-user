import React from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { User } from './';
import { jsonResponse } from './../../tempData';

const users = jsonResponse.users;

function UserList(props) {
  return (
    <List>
      {Object.keys(users).map((user) =>
        <User
          lastName={users[user].last_name}
          firstName={users[user].first_name}
          email={users[user].email}
          key={v4()}
        />
      )}
    </List>
  );
}

const mapStateToProps = state => ({
  masterUserList: UserList(state.masterUserList)
});

export default connect(mapStateToProps)(UserList);
