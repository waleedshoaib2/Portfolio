// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl flex justify-between items-center mb-10 border-b border-gray-800 bg-black p-4 text-white z-50">
      <div className="text-4xl font-bold">{"{W}"}</div>
      <nav className="space-x-8">
        <a href="#home" className="hover:text-green-500">Home</a>
        <a href="#projects" className="hover:text-green-500">Projects</a>
        <a href="#blog" className="hover:text-green-500">Blog</a>
      </nav>
    </header>
  );
};

export default Header;
