import React, { useState, useMemo } from 'react';
import { CHALLENGES } from '../constants';
import { Category, Level } from '../types';
import { Filter, Search } from 'lucide-react';

const ChallengeLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChallenges = useMemo(() => {
    return CHALLENGES.filter(challenge => {
      const matchesCategory = selectedCategory === 'All' || challenge.category === selectedCategory;
      const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            Object.values(challenge.levels).some(l => l.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-stone-100 py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Challenge Library</h2>
          <p className="mt-4 text-stone-600 mb-2">Explore the skills. Filter by category to find your weak spots.</p>
          <p className="text-sm text-orange-600 font-semibold bg-orange-50 px-4 py-2 rounded-lg inline-block border border-orange-200">
            📄 Note: These are brief descriptions. Sign up to download the complete PDF with detailed explanations for all 28 challenges!
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                <input 
                    type="text" 
                    placeholder="Search challenges..." 
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
                    <select 
                        className="pl-10 pr-8 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none text-stone-700 w-full sm:w-auto cursor-pointer"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
                    >
                        <option value="All">All Categories</option>
                        {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="relative">
                    <select 
                        className="pl-4 pr-8 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none text-stone-700 w-full sm:w-auto cursor-pointer"
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value as Level | 'All')}
                    >
                        <option value="All">All Levels</option>
                        {Object.values(Level).map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                </div>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.length > 0 ? filteredChallenges.map((challenge) => (
                <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                    <div className="p-6 border-b border-stone-100">
                        <span className="inline-block px-2 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded mb-3 uppercase tracking-wide">
                            {challenge.category}
                        </span>
                        <h3 className="text-xl font-bold text-stone-900">{challenge.title}</h3>
                    </div>
                    <div className="p-6 space-y-4 flex-grow bg-stone-50/50">
                        <div className={`text-sm transition-opacity ${selectedLevel !== 'All' && selectedLevel !== Level.INITIATE ? 'opacity-40' : 'opacity-100'}`}>
                            <span className="font-bold text-stone-900 mb-1 flex justify-between items-center">
                              Initiate
                              <span className="text-xs font-normal text-stone-400 bg-white px-1.5 py-0.5 rounded border border-stone-200">1 pt</span>
                            </span>
                            <p className="text-stone-600">{challenge.levels[Level.INITIATE]}</p>
                        </div>
                        <div className={`text-sm transition-opacity ${selectedLevel !== 'All' && selectedLevel !== Level.OPERATOR ? 'opacity-40' : 'opacity-100'}`}>
                             <span className="font-bold text-orange-700 mb-1 flex justify-between items-center">
                              Operator
                              <span className="text-xs font-normal text-orange-700/60 bg-white px-1.5 py-0.5 rounded border border-orange-200">3 pts</span>
                            </span>
                            <p className="text-stone-700">{challenge.levels[Level.OPERATOR]}</p>
                        </div>
                        <div className={`text-sm transition-opacity ${selectedLevel !== 'All' && selectedLevel !== Level.SURVIVOR ? 'opacity-40' : 'opacity-100'}`}>
                             <span className="font-bold text-stone-900 mb-1 flex justify-between items-center">
                              Survivor
                              <span className="text-xs font-normal text-stone-500 bg-white px-1.5 py-0.5 rounded border border-stone-200">5 pts</span>
                            </span>
                            <p className="text-stone-600 italic">{challenge.levels[Level.SURVIVOR]}</p>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="col-span-full text-center py-20 text-stone-500">
                    No challenges found matching your filters.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeLibrary;
