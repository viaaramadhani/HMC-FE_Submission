import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/Products';
import Cart from './components/Cart';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (count) => {
    setCartCount(count);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header cartCount={cartCount} />
        <main className="flex-1 container mx-auto">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <FeaturedProducts onAddToCart={handleAddToCart} />
              </>
            } />
            <Route path="/cart" element={<Cart cartCount={cartCount} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
