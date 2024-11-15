
import './styles.css';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import HomePage from './HomePage';
import Footer from './Footer';
import { Route, Switch } from 'wouter';

function App() {

  return (
    <>
    
    <Navbar />
    
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    
    
       <Footer/>
    </>
  );
}

export default App;