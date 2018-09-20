import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core/';
import { AddUser } from './';
import './../css/TableHeader.css';

function TableHeader() {
  return (
    <div>
      <AppBar position="static">
          <Toolbar className="table-header">
            <Typography variant="title" color="inherit">
              Current Users
            </Typography>
            <AddUser />
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default TableHeader;
