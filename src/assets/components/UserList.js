import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { User } from './';
import { fetchUsers } from './../../redux/actions';

class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  render() {
    return (
      <List>
        {Object.keys(this.props.masterUserList).map((user) =>
          <User
            lastName={this.props.masterUserList[user].last_name}
            firstName={this.props.masterUserList[user].first_name}
            email={this.props.masterUserList[user].email}
            key={v4()}
            currentUserId={this.props.masterUserList[user].id}
          />
        )}
      </List>
    );
  }
}

UserList.proptypes = {
  masterUserList: Proptypes.object,
  fetchUsers: Proptypes.func
}

const mapStateToProps = state => ({
  masterUserList: state.masterUserList
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
