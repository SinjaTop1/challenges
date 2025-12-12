import React from 'react';
import { ArrowDown, Download, Instagram, Send } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-stone-700/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-stone-100 tracking-tight leading-tight mb-6">
          Become the kind of person <br className="hidden md:block" />
          <span className="text-orange-500">who can handle things.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-400 mb-10">
          A 12-month challenge that turns competence into a game: skills, mindset, adventure, and real proof.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="/assets/competence-grid.pdf" target="_blank" className="flex items-center justify-center gap-2 bg-stone-100 text-stone-900 px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors">
            <Download className="w-5 h-5" />
            Download Sheet
          </a>
          <a href="#join" className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20">
            <Instagram className="w-5 h-5" />
            Join on Instagram
          </a>
        </div>

        {/* Mini How-it-works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mt-12 border-t border-stone-800 pt-12">
          <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
            <div className="text-orange-500 font-bold text-lg mb-2">01</div>
            <h3 className="text-stone-100 font-bold text-xl mb-2">Pick Challenges</h3>
            <p className="text-stone-400">Select from the grid based on your environment and current skill level.</p>
          </div>
          <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
            <div className="text-orange-500 font-bold text-lg mb-2">02</div>
            <h3 className="text-stone-100 font-bold text-xl mb-2">Complete & Prove</h3>
            <p className="text-stone-400">Do the work. Document it with a photo or video and a short reflection.</p>
          </div>
          <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
            <div className="text-orange-500 font-bold text-lg mb-2">03</div>
            <h3 className="text-stone-100 font-bold text-xl mb-2">Earn Status</h3>
            <p className="text-stone-400">Collect points, unlock badges, and level up your capability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
