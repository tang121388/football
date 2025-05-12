import React from 'react';
import { Percent as Soccer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Soccer className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-xl font-bold">Soccer Bros</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold mb-2 text-green-400">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Home</a></li>
                <li><a href="#game" className="text-gray-300 hover:text-white transition duration-200">Play Game</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition duration-200">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-green-400">Support</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Soccer Bros. All rights reserved.</p>
          <p className="mt-2">Game embedded from CrazyGames. Soccer Bros is a trademark of its respective owner.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;