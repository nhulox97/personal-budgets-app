import React from 'react';
import useFetch from '../../hooks/useFetch';
import Container from '../../components/Container';
import InfoTile from '../../components/InfoTile';
import InfoTileList from '../../components/InfoTileList';
import Loader from '../../components/Loader';

const Home = () => {
  const {
    result,
    loading
  } = useFetch(`${process.env.REACT_APP_API_URL}/transactions?project=6008ff93be76f7423086c5f5`);
  console.log(result);
  if (loading)
    return <Loader />;
  const transactionsData = result.result;
  const {
    gastos,
    countGastos, 
    ingresos, 
    countIngresos,
    saldo,
    countTransacciones 
    } = transactionsData;
  return (
    <Container>
      <InfoTileList>
        <InfoTile
          numberTransactions={countIngresos}
          amount={ingresos}
          transactionType='Ingresos'
        />
        <InfoTile
          numberTransactions={countGastos}
          amount={gastos}
          transactionType='Gastos'
        />
        <InfoTile
          numberTransactions={countTransacciones}
          amount={saldo}
          transactionType='Saldo'
        />
      </InfoTileList>
    </Container>
  );
}

export default Home;
