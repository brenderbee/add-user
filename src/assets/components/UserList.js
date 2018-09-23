import React from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { User } from './';

function UserList(props) {
  return (
    <List>
      {Object.keys(props.masterUserList).map((user) =>
        <User
          lastName={props.masterUserList[user].last_name}
          firstName={props.masterUserList[user].first_name}
          email={props.masterUserList[user].email}
          key={v4()}
        />
      )}
    </List>
  );
}

const mapStateToProps = state => ({
  masterUserList: state.masterUserList
});

export default connect(mapStateToProps)(UserList);
