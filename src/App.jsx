
import './styles.css';
import Navbar from './Navbar';
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import Footer from './Footer';
import { Route, Switch } from 'wouter';

function App() {

  return (
    <>
    
    <Navbar />
    
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    
    
       <Footer/>
    </>
  );
}

export default App;