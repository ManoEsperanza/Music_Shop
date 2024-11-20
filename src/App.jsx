
import './styles.css';
import React, {useEffect } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Footer from './Footer';
import { Route, Switch } from 'wouter';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import { useFlashMessage } from './FlashMessageStore';
import ShoppingCart from './ShoppingCart';


function App() {
  const { getMessage, clearMessage  } = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
    , 3000);
    return () => {
      clearTimeout(timer);
    };
  }
  , [flashMessage]);

  return (
    <>
      <Navbar />

      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/cart" component={ShoppingCart} />

      </Switch>

      <Footer/>
    </>
  );
}

export default App;

// import Navbar from './Navbar';
// // import React, { useState, useEffect } from 'react';
// // import ProductCard from './ProductCard';
// import HomePage from './HomePage';
// import ProductsPage from './ProductsPage';
// import RegisterPage from './RegisterPage';
// import Footer from './Footer';
// import { Route, Switch } from 'wouter';

// function App() {

//   return (
//     <>
    
//     <Navbar />
    
//       <Switch>
//         <Route path="/" component={HomePage} />
//         <Route path="/products" component={ProductsPage} />
//         <Route path="/register" component={RegisterPage} />
//       </Switch>
    
    
//        <Footer/>
//     </>
//   );
// }

// export default App;