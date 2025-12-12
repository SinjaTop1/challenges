import React from 'react';
import { CHALLENGES } from '../constants';
import { Category } from '../types';
import { ArrowRight, Lock, Sparkles } from 'lucide-react';

// Show only a curated preview of challenges - diverse categories, interesting ones
const PREVIEW_CHALLENGES = [
  'walk-100',
  'catch-fish',
  'light-fire',
  'emergency-kit',
  'navigate-gps',
  'panic-control',
  'camp-overnight',
  'rope-work',
  'cook-food',
];

const ChallengeLibrary: React.FC = () => {
  const previewChallenges = CHALLENGES.filter(challenge => 
    PREVIEW_CHALLENGES.includes(challenge.id)
  );

  // Group by category for better visual organization
  const challengesByCategory = previewChallenges.reduce((acc, challenge) => {
    if (!acc[challenge.category]) {
      acc[challenge.category] = [];
    }
    acc[challenge.category].push(challenge);
    return acc;
  }, {} as Record<Category, typeof previewChallenges>);

  return (
    <div className="bg-stone-100 py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">A Glimpse of What Awaits</h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto mb-6">
            Here's a preview of the challenges you'll tackle. Each one builds real competence across different domains of self-reliance.
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 text-sm text-orange-700 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>28 challenges total • 3 difficulty levels each</span>
          </div>
        </div>

        {/* Preview Grid - Show challenges grouped by category */}
        <div className="space-y-12 mb-12">
          {Object.entries(challengesByCategory).map(([category, challenges]) => (
            <div key={category} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-6 pb-3 border-b border-stone-200">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.map((challenge) => (
                  <div 
                    key={challenge.id} 
                    className="group p-4 rounded-lg border border-stone-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-stone-900 group-hover:text-orange-700 transition-colors">
                        {challenge.title}
                      </h4>
                      <Lock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-stone-500 mt-2">
                      Available in full PDF
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to See All 28 Challenges?</h3>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto text-lg">
            Sign up to get the complete PDF with detailed explanations, difficulty breakdowns, safety guidelines, and your personal tracking grid.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="text-2xl font-bold text-orange-400">28</div>
              <div className="text-xs text-stone-300">Initial Challenges</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="text-2xl font-bold text-orange-400">6</div>
              <div className="text-xs text-stone-300">Super Challenges Every 6 Weeks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="text-2xl font-bold text-orange-400">3</div>
              <div className="text-xs text-stone-300">Difficulty Levels Each</div>
            </div>
          </div>
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20 text-lg"
          >
            Get Your Complete PDF & Grid Access
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChallengeLibrary;
