import React from 'react';
import { BADGES } from '../constants';
import { Compass, Hammer, Anchor, Mountain, Shield, LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'compass': Compass,
  'hammer': Hammer,
  'anchor': Anchor,
  'mountain': Mountain,
  'shield': Shield,
};

const PointsAndBadges: React.FC = () => {
  return (
    <div className="bg-stone-900 py-24 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Gamification</h2>
          <p className="mt-4 text-stone-400">Earn points. Rank up. Unlock badges.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Points Summary */}
            <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 lg:col-span-1">
                <h3 className="text-2xl font-bold mb-6 text-white">Points per Challenge</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center font-bold text-stone-300 text-xl">1</div>
                        <div>
                            <h4 className="font-bold text-lg">Initiate</h4>
                            <p className="text-stone-400 text-sm">Low risk, low friction</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-900/40 border border-orange-700/50 flex items-center justify-center font-bold text-orange-500 text-xl">3</div>
                        <div>
                            <h4 className="font-bold text-lg text-orange-400">Operator</h4>
                            <p className="text-stone-400 text-sm">Planning & effort required</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-900 text-xl">5</div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Survivor</h4>
                            <p className="text-stone-400 text-sm">Autonomy & responsibility</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badges Grid */}
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6 text-white">Special Badges</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BADGES.map((badge) => {
                        const Icon = iconMap[badge.icon];
                        return (
                            <div key={badge.name} className="bg-stone-800 p-6 rounded-xl border border-stone-700 flex flex-col md:flex-row gap-4 items-start hover:border-orange-900/50 transition-colors">
                                <div className="p-3 bg-stone-700 rounded-lg text-orange-500">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-stone-100">{badge.name}</h4>
                                    <p className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-2">{badge.description}</p>
                                    <p className="text-sm text-stone-400 leading-relaxed">{badge.criteria}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PointsAndBadges;
