import React from 'react';
import useFetch from '../../hooks/useFetch';
import Container from '../../components/Container';
import InfoTile from '../../components/InfoTile';
import InfoTileList from '../../components/InfoTileList';
import Loader from '../../components/Loader';
// import data from '../../data';
import ProjectDetail from '../../components/ProjectDetail';

const Home = () => {

  const { 
      result, 
      loading 
  } = useFetch(`${process.env.REACT_APP_API_URL}/transactions?project=600cff589606b30015b2c7ce`);

  if (loading) 
    return <Loader />;

  const transactionsData  = result.result;
  const {
    gastos,
    countGastos, 
    ingresos, 
    countIngresos,
    saldo,
    countTransacciones,
    transactions
 } = transactionsData;
  const project = transactions[0].project;

  return (
    <Container>
      <ProjectDetail 
        projectTitle={project.project_title}
        projectDesc={project.project_desc}
      />
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

