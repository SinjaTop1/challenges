import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ChallengeLibrary from './components/ChallengeLibrary';
import PointsAndBadges from './components/PointsAndBadges';
import Prizes from './components/Prizes';
import JoinSubmit from './components/JoinSubmit';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
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
