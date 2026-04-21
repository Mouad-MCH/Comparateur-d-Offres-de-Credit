import React from 'react'
import OffersPage from './pages/OffersPage.jsx';
import Navbar from './components/Navbar.jsx';
import OfferCard from './components/OfferCard.jsx';
import { offers } from './data/offers.js';

const App = () => {

  return (
    <div className='app'>
      <Navbar/>
      <OffersPage 
        offers={ offers }
      />
    </div>
  )
}

export default App
