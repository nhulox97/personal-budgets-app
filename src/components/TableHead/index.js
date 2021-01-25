import React from 'react';

const TableHead = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((head, key) => (
        <th key={key} className="border p-1">{head}</th>)
      )}
    </tr>
  </thead>
)

export default TableHead;
