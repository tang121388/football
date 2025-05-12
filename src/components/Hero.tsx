import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black text-white">
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", 
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Soccer Bros
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Team up with your bro and dominate the soccer field in this exciting multiplayer game!
          </p>
          <a 
            href="#game" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Play Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;