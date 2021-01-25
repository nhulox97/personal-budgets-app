import React from 'react';

const TableBody = ({ transactions }) => (
  <tbody>
    {transactions.map((transaction, key) => (
      <tr key={key}>
        <td className="border p-1">{transaction.transaction_desc}</td>
        <td className="border p-1">{transaction.transaction_amount}</td>
        <td className="border p-1">{transaction.transaction_created_at}</td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
