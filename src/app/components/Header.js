"use client"
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="text-4xl font-bold">{"{W}"}</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#projects" className="hover:text-green-500">Projects</a>
          <a href="#blog" className="hover:text-green-500">Blog</a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m0 6h16"}></path>
          </svg>
        </button>
      </div>
      <nav ref={menuRef} className={`fixed right-0 top-0 h-full w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-4">
          <a href="#home" className="block py-2 hover:text-green-500">Home</a>
          <a href="#projects" className="block py-2 hover:text-green-500">Projects</a>
          <a href="#blog" className="block py-2 hover:text-green-500">Blog</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
