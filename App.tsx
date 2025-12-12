import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ChallengeLibrary from './components/ChallengeLibrary';
import PointsAndBadges from './components/PointsAndBadges';
import Prizes from './components/Prizes';
import JoinSubmit from './components/JoinSubmit';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GridTracker from './components/grid/GridTracker';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'grid'>('main');

  useEffect(() => {
    // Check URL hash for routing
    const handleHashChange = () => {
      if (window.location.hash === '#grid') {
        setCurrentView('grid');
      } else {
        setCurrentView('main');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // If grid view, show only the grid tracker
  if (currentView === 'grid') {
    return <GridTracker />;
  }

  // Main website view
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="challenges">
          <ChallengeLibrary />
        </section>
        <section id="points">
          <PointsAndBadges />
        </section>
        <section id="prizes">
          <Prizes />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="join">
          <JoinSubmit />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
