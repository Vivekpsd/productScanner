import {Container } from '@mui/material'
import QRGenerator from './components/QRGenerator'
import QRReader from './components/QRReader';

function App() {
  return (
      <>
       <Container maxWidth="md">
        <QRGenerator />
        <QRReader />
       </Container>
      </>
  );
}

export default App;
