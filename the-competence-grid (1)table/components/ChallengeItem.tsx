import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Challenge, DifficultyLevel } from '../types';
import { LEVEL_LABELS } from '../constants';

interface ChallengeItemProps {
  challenge: Challenge;
  completedState: Record<number, boolean>;
  onToggle: (level: DifficultyLevel) => void;
  onGetAdvice: (levelName: string) => void;
}

const LEVELS: DifficultyLevel[] = [1, 3, 5];

const ChallengeItem: React.FC<ChallengeItemProps> = ({ 
  challenge, 
  completedState, 
  onToggle,
  onGetAdvice 
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-stone-200 last:border-0 gap-2 group print:border-stone-300">
      <div className="flex items-center gap-2">
        <span className="text-stone-800 font-medium text-sm sm:text-base leading-tight">
          {challenge.name}
        </span>
        <button 
          onClick={() => onGetAdvice('General')}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-stone-400 hover:text-orange-500 no-print focus:opacity-100"
          title="Get AI Advice"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        {LEVELS.map((level) => {
          const isCompleted = completedState[level];
          return (
            <div key={level} className="flex flex-col items-center gap-1">
              <button
                onClick={() => onToggle(level)}
                className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200
                  ${isCompleted 
                    ? 'bg-stone-800 border-stone-800 text-white' 
                    : 'bg-white border-stone-300 text-stone-400 hover:border-orange-500 hover:text-orange-500'
                  }
                `}
                aria-label={`Mark ${LEVEL_LABELS[level]} complete`}
              >
                {isCompleted ? (
                   <span className="font-bold text-sm">✓</span>
                ) : (
                  <span className="font-mono text-xs font-bold">{level}</span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengeItem;
