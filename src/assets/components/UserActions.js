import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './../css/UserActions.css';
import { openEditModal } from './../../redux/actions';

function UserActions(props) {

  const handleOpenEditModal = () => {
    props.sendOpenEditModal();
  }
  return (
    <div>
      <Button
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

const mapStateToProps = state => ({
  currentModal: UserActions(state.currentModal)
});

const mapDispatchToProps = dispatch => ({
  sendOpenEditModal: () => dispatch(openEditModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserActions);
