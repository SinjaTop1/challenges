import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, Target } from 'lucide-react';
import { Challenge, DifficultyLevel } from '../../types/gridTypes';
import { LEVEL_LABELS } from '../../constants/gridConstants';

interface ChallengeItemProps {
  challenge: Challenge;
  completedState: Record<number, boolean>;
  onToggle: (level: DifficultyLevel) => void;
}

const LEVELS: DifficultyLevel[] = [1, 3, 5];
const LEVEL_COLORS = {
  1: 'text-stone-600 border-stone-300 bg-stone-50',
  3: 'text-orange-700 border-orange-300 bg-orange-50',
  5: 'text-stone-900 border-stone-400 bg-stone-100',
};

const ChallengeItem: React.FC<ChallengeItemProps> = ({ 
  challenge, 
  completedState, 
  onToggle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = challenge.description || challenge.whatYouLearn || challenge.levels;

  return (
    <div className="border-b border-stone-200 last:border-0 print:border-stone-300">
      {/* Main Row - Always Visible */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-3 group">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-stone-800 font-semibold text-sm sm:text-base leading-tight">
                {challenge.name}
              </h4>
              {hasDetails && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-stone-400 hover:text-orange-600 transition-colors flex-shrink-0 no-print"
                  aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                  title={isExpanded ? 'Hide details' : 'Show details'}
                >
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
            {!isExpanded && challenge.description && (
              <p className="text-xs text-stone-500 line-clamp-1">{challenge.description}</p>
            )}
          </div>
        </div>

        {/* Level Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto flex-shrink-0">
          {LEVELS.map((level) => {
            const isCompleted = completedState[level];
            return (
              <div key={level} className="flex flex-col items-center gap-1">
                <button
                  onClick={() => onToggle(level)}
                  className={`
                    w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200
                    ${isCompleted 
                      ? 'bg-stone-800 border-stone-800 text-white shadow-sm' 
                      : 'bg-white border-stone-300 text-stone-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50'
                    }
                  `}
                  aria-label={`Mark ${LEVEL_LABELS[level]} complete`}
                  title={`${LEVEL_LABELS[level]} - ${level} point${level > 1 ? 's' : ''}`}
                >
                  {isCompleted ? (
                     <span className="font-bold text-sm">✓</span>
                  ) : (
                    <span className="font-mono text-xs font-bold">{level}</span>
                  )}
                </button>
                {!isExpanded && (
                  <span className="text-[10px] text-stone-400 font-mono hidden sm:block">
                    {level}pt
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && hasDetails && (
        <div className="pb-4 pt-2 border-t border-stone-100 bg-stone-50/50 -mx-1 px-3 rounded-b-lg no-print">
          {challenge.description && (
            <div className="mb-3">
              <div className="flex items-start gap-2 mb-1">
                <Target className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-stone-700 leading-relaxed">{challenge.description}</p>
              </div>
            </div>
          )}

          {challenge.whatYouLearn && (
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-stone-700">What you learn: </span>
                  <span className="text-xs text-stone-600">{challenge.whatYouLearn}</span>
                </div>
              </div>
            </div>
          )}

          {challenge.levels && (
            <div className="space-y-2 mt-3">
              {LEVELS.map((level) => {
                const levelInfo = challenge.levels?.[level];
                if (!levelInfo) return null;
                
                const isCompleted = completedState[level];
                return (
                  <div
                    key={level}
                    className={`
                      p-2.5 rounded-lg border text-xs transition-all
                      ${isCompleted 
                        ? 'bg-stone-200 border-stone-300 opacity-75' 
                        : LEVEL_COLORS[level]
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${isCompleted ? 'line-through text-stone-500' : ''}`}>
                          {levelInfo.title}
                        </span>
                        <span className="font-mono text-[10px] bg-white px-1.5 py-0.5 rounded border border-stone-200">
                          {level} pt{level > 1 ? 's' : ''}
                        </span>
                      </div>
                      {isCompleted && (
                        <span className="text-green-600 font-bold text-xs">✓</span>
                      )}
                    </div>
                    <p className={`text-stone-600 leading-relaxed ${isCompleted ? 'line-through' : ''}`}>
                      {levelInfo.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChallengeItem;
