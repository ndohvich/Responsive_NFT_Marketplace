import React from 'react';
import Clients from './components/Clients';
import CreateAndSell from './components/CreateAndSell';
import Home from './components/Home';
import Choose from './components/Choose';
import { Marketplace } from './components/Marketplace';

function App() {
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <Marketplace />
    </div>
  )
}

export default App