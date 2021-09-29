import React from 'react';
import Navbar from './components/Navbar';
import MoneyPage from './pages/moneyPage';
import ProductPage from './pages/productPage';
import BasketPage from './pages/basketPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoneyPage/>
      <ProductPage/>
      <BasketPage/>
    </div>
  );
}

export default App;
