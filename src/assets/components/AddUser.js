import React from 'react';
import { Tooltip, Button } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { openModal } from './../../redux/actions';

function AddUser(props) {
  const handleOpenAddModal = () => {
    props.modalDisplay();
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
  modalDisplay: Proptypes.bool
}

const mapStateToProps = state => ({
  modalDisplay: AddUser(state.modalDisplay)
});

const mapDispatchToProps = dispatch => ({
  modalDisplay: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
