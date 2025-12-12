import React from 'react';
import { RANKS } from '../../constants/gridConstants';
import { QrCode } from 'lucide-react';

const GridFooter: React.FC = () => {
  return (
    <footer className="mt-12 border-t-4 border-stone-900 pt-8 pb-12 print:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Ranks */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2 mb-3">
            Rank Classification System
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm">
            {RANKS.map((rank) => (
              <div key={rank.name} className="flex items-baseline justify-between border-b border-stone-100 pb-1">
                <span className={`font-bold ${rank.color}`}>{rank.name}</span>
                <span className="font-mono text-stone-500 text-xs">
                  {rank.min}{rank.max > 1000 ? '+' : `–${rank.max}`}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4">
            <h4 className="font-bold uppercase tracking-wider text-stone-900 text-xs mb-2">
              Recommended Yearly Targets
            </h4>
            <div className="flex flex-wrap gap-4 text-sm text-stone-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-400"></span>
                Casual: 20 pts
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Serious: 60 pts
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                Competitive: 120+ pts
              </span>
            </div>
          </div>
        </div>

        {/* Website & QR */}
        <div className="col-span-1 flex flex-col items-center md:items-end justify-between">
          <div className="text-center md:text-right mb-6">
            <h3 className="font-black text-xl text-stone-900 tracking-tighter">THE COMPETENCE GRID</h3>
            <p className="text-stone-500 text-sm">Official Tracking Sheet</p>
          </div>
          
          <div className="bg-white p-4 border border-stone-200 rounded-lg flex flex-col items-center gap-2 shadow-sm print:shadow-none print:border-stone-900">
             <div className="relative w-24 h-24 bg-stone-900 flex items-center justify-center text-white">
                {/* Simulated QR Code look */}
                <QrCode className="w-16 h-16" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-white"></div>
             </div>
             <span className="font-mono text-xs font-bold text-stone-600 tracking-wide">SCAN TO LOG</span>
          </div>

          <div className="mt-4 text-right">
             <a href="/" className="font-mono text-sm text-stone-400 hover:text-orange-600 transition-colors">
               www.competencegrid.com
             </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-stone-300 print:hidden">
        &copy; {new Date().getFullYear()} The Competence Grid. All rights reserved.
      </div>
    </footer>
  );
};

export default GridFooter;

