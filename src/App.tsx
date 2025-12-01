import { Box } from '@mui/material'

import './App.css'
import Celebracoes from './components/Celebracoes';
import Header from './components/Header'
import Hero from './components/Hero';
import Imagens from './components/Imagens';
import NossaComunidade from './components/NossaComunidade';
import SantoExpedito from './components/SantoExpedito';
import VisiteNos from './components/VisiteNos';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: "column" }}>
      <Header />
      <Hero />
      <NossaComunidade />
      <SantoExpedito />
      <Celebracoes />
      <Imagens />
      <VisiteNos/>
      <Footer/>
    </Box >
  );
}

export default App;
