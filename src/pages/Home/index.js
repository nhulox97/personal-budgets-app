import React from 'react';
import Container from '../../components/Container';
import InfoTile from '../../components/InfoTile';

const Home = () => (
  <Container>
    <div className="flex flex-col">
      <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos'/>
      <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos'/>
      <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos'/>
    </div>
  </Container>
);

export default Home;
