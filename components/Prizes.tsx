import React from 'react';
import { Trophy, Gift, Users, Star, Award } from 'lucide-react';

const Prizes: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3">Rewards & Recognition</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Earn Real Prizes</h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Complete challenges and earn physical rewards. Compete for the ultimate prize: an exclusive in-person retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Physical Prizes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100 hover:border-orange-200 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-orange-100 rounded-xl">
                <Gift className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-stone-900">Physical Prizes</h4>
                <p className="text-stone-600 text-sm">For dedicated participants</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-stone-700 leading-relaxed">
                Complete <strong className="text-stone-900">all 28 challenges on at least medium difficulty (Operator level)</strong> and you'll receive special physical prizes as recognition for your commitment and achievement.
              </p>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-600 mb-2 font-semibold">Requirements:</p>
                <ul className="space-y-1 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Complete all 28 initial challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>At minimum Operator difficulty (3 points each)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Submit proof and reflections for each challenge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* In-Person Retreat */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 shadow-lg border-2 border-orange-500/30 hover:border-orange-500/50 transition-all text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-orange-600/20 rounded-xl border border-orange-500/30">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Elite Retreat</h4>
                <p className="text-orange-300 text-sm">For the competitive elite</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-stone-200 leading-relaxed">
                For those who complete <strong className="text-white">all challenges on the hardest difficulty (Survivor level) in the shortest time</strong>, we're organizing an exclusive <strong className="text-orange-400">in-person meeting or retreat</strong> (details to be announced). This will be an incredible experience bringing together the most dedicated participants.
              </p>
              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                <p className="text-sm text-orange-300 mb-2 font-semibold">Competition Rules:</p>
                <ul className="space-y-1 text-sm text-stone-200">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">🏆</span>
                    <span>Complete all challenges at Survivor difficulty (5 points each)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">🏆</span>
                    <span>Fastest completion time wins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold">🏆</span>
                    <span>Includes all super challenges released throughout the year</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-orange-600/20 rounded-lg border border-orange-500/30">
                <p className="text-xs text-orange-200 italic">
                  ⚡ More details about the retreat location, dates, and activities will be announced as the competition progresses. It's going to be awesome!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-stone-900 rounded-2xl p-8 text-white">
          <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-3">Ready to Compete?</h4>
          <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
            Whether you're aiming for the physical prizes or competing for the elite retreat, every challenge brings you closer to your goal. Start your journey today.
          </p>
          <a href="#join" className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20">
            <Award className="w-5 h-5" />
            Sign Up & Start Earning
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prizes;

