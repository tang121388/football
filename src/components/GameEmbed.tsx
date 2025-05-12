import React from 'react';

const GameEmbed: React.FC = () => {
  return (
    <section id="game" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Play Soccer Bros</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-5xl mx-auto">
          <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-md" 
              src="https://soccer-bros.github.io" 
              frameBorder="0" 
              allow="fullscreen" 
              title="Soccer Bros Online Game"
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="mt-4 flex justify-between items-center flex-wrap">
            <div className="flex items-center">
              <span className="inline-block h-3 w-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Online & Ready to Play</span>
            </div>
            <button className="mt-2 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500">
              Fullscreen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameEmbed;