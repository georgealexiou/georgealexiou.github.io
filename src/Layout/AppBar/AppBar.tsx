import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const AppBar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="fixed top-0 left-0 z-20 w-full bg-transparent transition-all duration-300"
      style={{ backdropFilter: location.pathname === '/' ? '' : 'blur(10px)' }}
    >
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-auto text-center sm:text-left">
            <div className="mx-auto flex-shrink-0 text-3xl font-bold text-white">
              <a
                href="/"
                style={{
                  backgroundImage: 'linear-gradient(to right, #ff50b3, #21abe1)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                XYZ
              </a>
            </div>
          </div>

          <div className="absolute md:hidden">
            <button
              type="button"
              className="ml-3 inline-flex items-center justify-center rounded-md bg-stone-700 p-2 text-white hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-gray-900">
                About
              </a>
              <a href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/about"
            className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="/contact"
            className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-50 hover:text-gray-900"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
