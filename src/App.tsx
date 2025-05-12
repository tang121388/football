import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameEmbed from './components/GameEmbed';
import GameDescription from './components/GameDescription';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    // Update the document title for SEO
    document.title = 'Soccer Bros - Play Online Multiplayer Soccer Game';
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Play Soccer Bros online - a multiplayer soccer game where you team up with a friend to dominate the field. Free to play now!';
    document.head.appendChild(metaDescription);
    
    // Add keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'soccer bros, online soccer game, multiplayer soccer, sports game, football game, online game';
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up on unmount
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GameEmbed />
        <GameDescription />
      </main>
      <Footer />
    </div>
  );
}

export default App;