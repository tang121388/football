import React from 'react';
import { Percent as Soccer } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Soccer className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold tracking-tight">Soccer Bros</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-200 transition duration-200">Home</a></li>
            <li><a href="#game" className="hover:text-green-200 transition duration-200">Play Now</a></li>
            <li><a href="#about" className="hover:text-green-200 transition duration-200">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;