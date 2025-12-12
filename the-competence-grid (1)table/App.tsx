import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Trophy, Printer, RotateCcw, Mountain, Download, Upload, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, RANKS, LEVEL_LABELS } from './constants';
import { CompletedState, DifficultyLevel } from './types';
import ChallengeItem from './components/ChallengeItem';
import Footer from './components/Footer';
import AdviceModal from './components/AdviceModal';
import { getAdviceForChallenge } from './services/geminiService';

const App: React.FC = () => {
  // State
  const [completed, setCompleted] = useState<CompletedState>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem('competenceGridState');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to parse saved state", e);
      return {};
    }
  });
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [adviceError, setAdviceError] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Persistence
  useEffect(() => {
    try {
      localStorage.setItem('competenceGridState', JSON.stringify(completed));
    } catch (e) {
      console.error("Failed to save state to localStorage", e);
      // In a real app, might show a toast here
    }
  }, [completed]);

  // Calculations
  const totalScore = useMemo(() => {
    let score = 0;
    Object.entries(completed).forEach(([key, isDone]) => {
      if (isDone) {
        // Key format: "categoryId-challengeId-level" -> we extract the level from end
        const level = parseInt(key.split('-').pop() || '0', 10);
        score += level;
      }
    });
    return score;
  }, [completed]);

  const currentRank = useMemo(() => {
    return RANKS.find(r => totalScore >= r.min && totalScore <= r.max) || RANKS[0];
  }, [totalScore]);

  const nextRank = useMemo(() => {
    const idx = RANKS.indexOf(currentRank);
    return idx < RANKS.length - 1 ? RANKS[idx + 1] : null;
  }, [currentRank]);

  // Handlers
  const toggleChallenge = (categoryId: string, challengeId: string, level: DifficultyLevel) => {
    setCompleted(prev => {
      const targetKey = `${categoryId}-${challengeId}-${level}`;
      const isCurrentlySelected = prev[targetKey];
      
      // Create a copy of the state to mutate
      const newState = { ...prev };

      // Enforce mutual exclusivity: Remove all existing levels for this challenge
      const levels: DifficultyLevel[] = [1, 3, 5];
      levels.forEach(l => {
        delete newState[`${categoryId}-${challengeId}-${l}`];
      });

      // If it wasn't selected before, select it now.
      // If it was selected, it stays deleted (toggling off).
      if (!isCurrentlySelected) {
        newState[targetKey] = true;
      }

      return newState;
    });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCompleted({});
      localStorage.removeItem('competenceGridState');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(completed, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const date = new Date().toISOString().split('T')[0];
    link.download = `competence-grid-backup-${date}.json`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const parsed = JSON.parse(result);
        
        // Basic structure check
        if (typeof parsed === 'object' && parsed !== null) {
          if (confirm(`Load backup from file? This will overwrite current progress (${totalScore} pts).`)) {
             setCompleted(parsed);
          }
        } else {
          alert('Invalid backup file format.');
        }
      } catch (err) {
        alert('Error reading backup file.');
        console.error(err);
      }
      // Reset input so same file can be selected again if needed
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  const handleGetAdvice = async (challengeName: string, difficultyLabel: string) => {
    setModalOpen(true);
    setModalData({ title: challengeName, content: '' });
    setLoadingAdvice(true);
    setAdviceError(undefined);

    try {
      const advice = await getAdviceForChallenge(challengeName, difficultyLabel);
      setModalData({ title: challengeName, content: advice });
    } catch (err: any) {
      setAdviceError("Unable to contact command center. Please ensure your API Key is configured.");
    } finally {
      setLoadingAdvice(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 print:p-0">
      <div className="max-w-6xl mx-auto bg-stone-50 md:shadow-2xl md:p-12 print:shadow-none print:p-0 print:bg-white rounded-xl border border-stone-200 print:border-none min-h-[1000px]">
        
        {/* Header Section */}
        <header className="mb-10 border-b-2 border-stone-900 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 text-stone-900 mb-2">
                <Mountain className="w-8 h-8" />
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                  The Competence Grid
                </h1>
              </div>
              <p className="text-stone-600 font-medium text-lg md:pl-11">
                Complete challenges. Earn points. Level up your competence.
              </p>
            </div>

            {/* Actions (Hidden on Print) */}
            <div className="flex flex-wrap gap-2 no-print items-center justify-end w-full md:w-auto">
               
               {/* Auto-save Indicator */}
               <div className="hidden lg:flex items-center gap-2 mr-4 text-xs font-semibold text-stone-400 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Auto-save active
               </div>

               <div className="h-6 w-px bg-stone-300 mx-1 hidden sm:block"></div>

               {/* Data Management */}
               <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".json"
               />
               <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-3 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors text-sm font-medium"
                title="Backup Progress to File"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button 
                onClick={handleImportClick}
                className="flex items-center gap-2 px-3 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors text-sm font-medium"
                title="Restore Progress from File"
              >
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Import</span>
              </button>

              <div className="h-6 w-px bg-stone-300 mx-1 hidden sm:block"></div>

              {/* View/Edit Controls */}
               <button 
                onClick={handleReset}
                className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Reset All Progress"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded font-bold hover:bg-stone-700 transition-colors shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print Grid</span>
              </button>
            </div>
          </div>

          {/* Legend & Score Summary */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 md:items-center justify-between bg-white p-4 rounded-lg border border-stone-200 print:border-stone-900">
            
            {/* Legend */}
            <div className="flex gap-6 text-sm overflow-x-auto pb-2 md:pb-0">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center font-mono text-xs font-bold text-stone-400">1</span>
                <span className="font-bold text-stone-600 uppercase">Initiate</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center font-mono text-xs font-bold text-stone-400">3</span>
                <span className="font-bold text-stone-600 uppercase">Operator</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center font-mono text-xs font-bold text-stone-400">5</span>
                <span className="font-bold text-orange-600 uppercase">Survivor</span>
              </div>
            </div>

            {/* Live Score */}
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase text-stone-400 tracking-wider">Current Rank</span>
                <span className={`text-xl font-black uppercase ${currentRank.color}`}>
                  {currentRank.name}
                </span>
              </div>
              
              <div className="h-10 w-[1px] bg-stone-200 mx-2"></div>

              <div className="flex flex-col items-end min-w-[100px]">
                <span className="text-3xl font-black text-stone-900 tabular-nums leading-none">
                  {totalScore}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  {nextRank ? `/ ${nextRank.min} PTS` : 'MAX RANK'}
                </span>
              </div>
              <Trophy className={`w-8 h-8 ${currentRank.color}`} />
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 print:gap-y-6">
          {CATEGORIES.map((category) => (
            <section key={category.id} className="break-inside-avoid print-break-inside-avoid">
              <div className="flex items-center gap-3 border-b-2 border-stone-200 pb-2 mb-4">
                <category.icon className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-black uppercase tracking-tight text-stone-900">
                  {category.title}
                </h2>
              </div>
              
              <div className="space-y-1">
                {category.challenges.map((challenge) => (
                  <ChallengeItem
                    key={challenge.id}
                    challenge={challenge}
                    completedState={{
                      1: completed[`${category.id}-${challenge.id}-1`],
                      3: completed[`${category.id}-${challenge.id}-3`],
                      5: completed[`${category.id}-${challenge.id}-5`],
                    }}
                    onToggle={(level) => toggleChallenge(category.id, challenge.id, level)}
                    onGetAdvice={(difficultyLabel) => handleGetAdvice(challenge.name, difficultyLabel)}
                  />
                ))}
              </div>
            </section>
          ))}
        </main>

        <Footer />
      </div>

      <AdviceModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        content={modalData.content}
        isLoading={loadingAdvice}
        error={adviceError}
      />
    </div>
  );
};

export default App;