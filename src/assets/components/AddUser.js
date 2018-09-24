import React from 'react';
import Proptypes from 'prop-types';
import { Tooltip, Button } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { openAddModal } from './../../redux/actions';

function AddUser(props) {

  const handleOpenAddModal = () => {
    props.sendOpenModal();
  }

  return (
    <div>
      <Tooltip title="Add">
        <Button
          onClick={handleOpenAddModal}
          variant="fab"
          color="secondary"
          aria-label="Add"
          mini={true}
        >
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

AddUser.proptypes = {
  currentModal: Proptypes.string,
  sendOpenModal: Proptypes.func
}

const mapStateToProps = state => ({
  currentModal: state.currentModal
});

const mapDispatchToProps = dispatch => ({
  sendOpenModal: () => dispatch(openAddModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
