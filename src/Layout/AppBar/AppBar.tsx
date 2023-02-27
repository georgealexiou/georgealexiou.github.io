import React from 'react';
import { useLocation } from 'react-router-dom';

export const AppBar: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className="fixed top-0 left-0 z-20 w-full bg-transparent transition-all duration-300"
      style={{ backdropFilter: location.pathname === '/' ? '' : 'blur(10px)' }}
    >
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 text-3xl font-bold text-white">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-gray-900">
                About
              </a>
              <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
