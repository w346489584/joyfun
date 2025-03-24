import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-apple-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 8L10 12L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xl font-bold">JoyFun</span>
                <span className="text-lg text-apple-blue-200 ml-1">.space</span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-white hover:text-apple-blue-200 transition">Home</a>
            </Link>
            <Link href="/games">
              <a className="text-white hover:text-apple-blue-200 transition">Games</a>
            </Link>
            <Link href="/categories">
              <a className="text-white hover:text-apple-blue-200 transition">Categories</a>
            </Link>
            <Link href="/about">
              <a className="text-white hover:text-apple-blue-200 transition">About</a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/">
                <a className="text-white hover:text-apple-blue-200 transition py-2">Home</a>
              </Link>
              <Link href="/games">
                <a className="text-white hover:text-apple-blue-200 transition py-2">Games</a>
              </Link>
              <Link href="/categories">
                <a className="text-white hover:text-apple-blue-200 transition py-2">Categories</a>
              </Link>
              <Link href="/about">
                <a className="text-white hover:text-apple-blue-200 transition py-2">About</a>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 