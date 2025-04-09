import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Header/NavigationBar';
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage'; 
import ProductPage from './pages/ProductPage'; 
import ServicesPage from './pages/ServicesPage'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
