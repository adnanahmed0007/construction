// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
 

const Header = () => {
  return (
    <header className="bg-yellow-700 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          BuildStrong<span className="text-gray-300"> Co.</span>
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/our-serveise" className="hover:text-yellow-300 transition-colors">Services</Link>
          <Link to="/sell" className="hover:text-yellow-300 transition-colors">Sell</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
           
        </nav>
      </div>
    </header>
  );
};

export default Header;
