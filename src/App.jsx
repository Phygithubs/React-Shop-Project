import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import BootomBar from './components/Bootombar';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
    setCart((prevCart) => [...prevCart, product]);  // Use prevCart to avoid async issues
  };

  return (
    <div>
      <header>
        <Header cart={cart} />
      </header>

      <main style={{ height: "auto" }}>
        <Outlet context={{ addToCart }} />
      </main>

      <footer>
        <Footer />
      </footer>

      <BootomBar/>
    </div>
  );
};

export default App;
