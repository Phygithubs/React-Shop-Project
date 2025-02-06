
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { ProductProvider } from './store/ProductProvider.jsx';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactPage from './pages/ContactPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import CartPage from './components/CartPage.jsx';

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider> {/* Wrap your app with CartProvider */}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} >
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/ShopPage" element={<ShopPage />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/CartPage" element={<CartPage />} />
            </Route>
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        
      </CartProvider>
    </ProductProvider>
  </StrictMode>
);
