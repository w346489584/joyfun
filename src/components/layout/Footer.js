import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-apple-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/">
              <a className="flex items-center mb-4">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 8L10 12L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg font-bold">JoyFun</span>
                <span className="text-sm text-apple-blue-300 ml-1">.space</span>
              </a>
            </Link>
            <p className="text-apple-blue-200 text-sm">
              Your destination for the best online games. Play instantly in your browser for free.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">All Games</a>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Categories</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">About Us</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Game Categories */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/action">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Action Games</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/adventure">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Adventure Games</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/puzzle">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Puzzle Games</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/survival">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Survival Games</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Cookie Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-apple-blue-200 hover:text-white text-sm transition">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-apple-blue-800 text-center text-apple-blue-300 text-sm">
          <p>&copy; {currentYear} JoyFun.space. All rights reserved.</p>
          <p className="mt-2">
            All games on this site are property of their respective owners and are embedded with their permission.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 