import React from 'react';
import Clients from './components/Clients';
import CreateAndSell from './components/CreateAndSell';
import Home from './components/Home';
import Choose from './components/Choose';
import { Marketplace } from './components/Marketplace';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <scrollToTop />
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <Marketplace />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App