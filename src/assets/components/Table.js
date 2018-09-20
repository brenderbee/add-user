import React from 'react';
import { TableHeader, UserList } from './';
import './../css/Table.css';

function Table() {
  return (
    <div className="table">
      <TableHeader />
      <UserList />
    </div>
  );
}

export default Table;
