import React from 'react';
import Container from '../../components/Container';
import InfoTile from '../../components/InfoTile';
import InfoTileList from '../../components/InfoTileList';

const Home = () => (
  <Container>
      <InfoTileList>
        <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos' />
        <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos' />
        <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos' />
        <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos' />
        <InfoTile numberTransactions={10} amount={1000} transactionType='Gastos' />
      </InfoTileList>
  </Container>
);

export default Home;
