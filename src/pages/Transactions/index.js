import React from 'react';
import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import Container from '../../components/Container';
import data from '../../data';
import TableBody from '../../components/TableBody';

const Transactions = () => {
  const heads = ['Desc','Monto','Fecha'];
  const { transactions } = data.result;
  return (
    <Container>
      <Table>
        <TableHead headers={heads} / >
        <TableBody transactions={transactions} />
      </Table>
    </Container>
  );
}

export default Transactions;
