import React from 'react';
import { Target, Award, ShieldAlert, Zap, TrendingUp, UserCheck, Shield } from 'lucide-react';
import { RANKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3">The System</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900">How It Works</h3>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Tasks have difficulty. People have rank. Points connect the two.
          </p>
        </div>

        {/* 1. The Cycle (Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-stone-200 -z-10"></div>
          
          {[
            { title: "Pick Challenge", desc: "Choose any skill from the library.", icon: Target },
            { title: "Complete It", desc: "Execute at any difficulty level.", icon: Zap },
            { title: "Earn Points", desc: "1, 3, or 5 points based on difficulty.", icon: Award },
            { title: "Rank Up", desc: "Your rank upgrades automatically.", icon: TrendingUp },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-stone-50 md:bg-transparent">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-100 flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="font-bold text-xl text-stone-900 mb-2">{step.title}</h4>
              <p className="text-stone-600 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. Difficulty vs Rank Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Challenge Difficulty */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
            <h4 className="text-2xl font-bold text-stone-900 flex items-center gap-3 mb-8">
              <ShieldAlert className="w-7 h-7 text-orange-600" />
              Challenge Difficulty
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-700">1</div>
                <div>
                  <h5 className="font-bold text-stone-900 text-lg">Initiate</h5>
                  <p className="text-stone-600 text-sm leading-relaxed">Simple, first exposure, low risk. Designed to get you moving.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-800">3</div>
                <div>
                  <h5 className="font-bold text-stone-900 text-lg">Operator</h5>
                  <p className="text-stone-600 text-sm leading-relaxed">More friction. Less convenience. Requires planning and effort.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-900 text-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white">5</div>
                <div>
                  <h5 className="font-bold text-white text-lg">Survivor</h5>
                  <p className="text-stone-400 text-sm leading-relaxed">Autonomy, duration, responsibility. High effort, high reward.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Player Ranks */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full">
            <h4 className="text-2xl font-bold text-stone-900 flex items-center gap-3 mb-8">
              <UserCheck className="w-7 h-7 text-orange-600" />
              Your Rank
            </h4>
            <div className="relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-stone-200"></div>
              <div className="space-y-6">
                {RANKS.map((rank, i) => (
                  <div key={rank.name} className="relative flex items-center gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 z-10 flex items-center justify-center bg-white ${i === RANKS.length - 1 ? 'border-orange-500' : 'border-stone-300'}`}>
                      <div className={`w-4 h-4 rounded-full ${i === RANKS.length - 1 ? 'bg-orange-500' : 'bg-stone-300'}`}></div>
                    </div>
                    <div className="flex-grow flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
                      <div>
                        <span className={`block font-bold ${i === RANKS.length - 1 ? 'text-orange-600' : 'text-stone-900'}`}>{rank.name}</span>
                        <span className="text-xs text-stone-500">{rank.description}</span>
                      </div>
                      <span className="font-mono font-bold text-stone-400 bg-white px-3 py-1 rounded shadow-sm text-sm">{rank.range}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 3. Recommended Targets */}
        <div className="border-t border-stone-200 pt-16">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold text-stone-900">Recommended Targets</h4>
            <p className="text-stone-600 mt-2">Pick a goal for the year. No special modes, just personal accountability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-stone-100 p-6 rounded-xl text-center">
              <div className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-2">Casual</div>
              <div className="text-4xl font-extrabold text-stone-900 mb-2">20 <span className="text-lg font-medium text-stone-500">pts</span></div>
              <p className="text-sm text-stone-600">A respectable introduction to self-reliance.</p>
            </div>
            
            <div className="bg-white border-2 border-orange-100 p-6 rounded-xl text-center shadow-sm">
              <div className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-2">Serious</div>
              <div className="text-4xl font-extrabold text-stone-900 mb-2">60 <span className="text-lg font-medium text-stone-500">pts</span></div>
              <p className="text-sm text-stone-600">Significant commitment. You become a capable person.</p>
            </div>

            <div className="bg-stone-900 p-6 rounded-xl text-center text-white">
              <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2">Competitive</div>
              <div className="text-4xl font-extrabold text-white mb-2">120+ <span className="text-lg font-medium text-stone-500">pts</span></div>
              <p className="text-sm text-stone-400">Elite status. Must complete at least 5 Survivor challenges.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
