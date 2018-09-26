import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './../css/UserActions.css';
import { openEditModal, deleteUser, setCurrentUser } from './../../actions';

function UserActions(props) {

  const handleOpenEditModal = () => {
    props.sendOpenEditModal();
    props.sendCurrentUser(props.currentUser);
  }

  const handleDeleteUser = () => {
    props.sendDeleteUser(props.currentUser.id);
  }

  return (
    <div>
      <Button
        onClick={handleDeleteUser}
        className="user-button"
        variant="outlined"
        color="primary"
        size="small"
      >
        Delete
        <DeleteIcon className="user-icon"/>
      </Button>
      <Button
        onClick={handleOpenEditModal}
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

UserActions.proptypes = {
  currentUser: Proptypes.object
}

const mapDispatchToProps = dispatch => ({
  sendOpenEditModal: () => dispatch(openEditModal()),
  sendDeleteUser: (userId) => dispatch(deleteUser(userId)),
  sendCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(UserActions);
