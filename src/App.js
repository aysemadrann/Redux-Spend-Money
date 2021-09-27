import React from 'react';
import Navbar from './components/Navbar';
import MoneyPage from './pages/moneyPage';
import ProductPage from './pages/productPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoneyPage/>
      <ProductPage/>
    </div>
  );
}

export default App;
