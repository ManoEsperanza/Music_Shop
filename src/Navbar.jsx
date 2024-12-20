import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

function Navbar() {
  const [isNavbarShowing, setNavbarShowing] = useState(false);

  const [location] = useLocation();
  
  useEffect(() => {
    const syncNavbarState = () => {
      setNavbarShowing(window.innerWidth >= 992);
    };

    syncNavbarState();
    window.addEventListener('resize', syncNavbarState);
    return () => window.removeEventListener('resize', syncNavbarState);
  }, []);

  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">Mano's Music Shop</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${location === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className={`nav-link ${location === '/products' ? 'active' : ''}`}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className={`nav-link ${location === '/register' ? 'active' : ''}`}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart" className={`nav-link ${location === '/cart' ? 'active' : ''}`}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className={`nav-link ${location === '/login' ? 'active' : ''}`}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;