import React from 'react';
import { Users, Gamepad2, Trophy, Share2 } from 'lucide-react';

const GameDescription: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">About Soccer Bros</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          An exciting multiplayer soccer game where teamwork makes the dream work!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Game Overview</h3>
            <p className="text-gray-700 mb-4">
              Soccer Bros is an action-packed multiplayer soccer game that lets you team up with a friend to take on opponents from around the world. With simple controls and addictive gameplay, you'll be scoring goals and making epic saves in no time!
            </p>
            <p className="text-gray-700">
              Control your character, pass the ball strategically, and unleash powerful shots to outscore your opponents. Communication and coordination with your teammate are essential for victory.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Users className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <span className="text-gray-700">Multiplayer gameplay - team up with a friend</span>
              </li>
              <li className="flex items-start">
                <Gamepad2 className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <span className="text-gray-700">Simple controls - easy to learn, hard to master</span>
              </li>
              <li className="flex items-start">
                <Trophy className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <span className="text-gray-700">Competitive matches with global leaderboards</span>
              </li>
              <li className="flex items-start">
                <Share2 className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <span className="text-gray-700">Share your best goals and invite friends to play</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-green-700 to-green-800 text-white p-8 rounded-lg max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">How to Play</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-4 rounded">
              <h4 className="font-semibold mb-2">Controls</h4>
              <p className="text-sm">Use arrow keys or WASD to move your player around the field.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded">
              <h4 className="font-semibold mb-2">Passing</h4>
              <p className="text-sm">Click or press the spacebar to pass the ball to your teammate.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded">
              <h4 className="font-semibold mb-2">Shooting</h4>
              <p className="text-sm">Double-click or press X to shoot the ball towards the goal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDescription;