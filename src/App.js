import './App.css';
import Container from './components/Container';
import InfoTile from './components/InfoTile';

const App = () => {
  return (
    <Container>
        <div className="flex flex-col">
          <InfoTile amount={1000} transactionType='Gastos'/>
          <InfoTile amount={1000} transactionType='Gastos'/>
          <InfoTile amount={1000} transactionType='Gastos'/>
        </div>
    </Container>
  );
}

export default App;
