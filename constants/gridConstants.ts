import { Rank } from '../types/gridTypes';

export const RANKS: Rank[] = [
  { name: 'Recruit', min: 0, max: 9, color: 'text-stone-500' },
  { name: 'Capable', min: 10, max: 24, color: 'text-stone-600' },
  { name: 'Competent', min: 25, max: 49, color: 'text-orange-500' },
  { name: 'Reliable', min: 50, max: 79, color: 'text-orange-600' },
  { name: 'Self-Reliant', min: 80, max: 119, color: 'text-orange-700' },
  { name: 'Elite', min: 120, max: 9999, color: 'text-black' },
];

export const LEVEL_LABELS = {
  1: 'Initiate',
  3: 'Operator',
  5: 'Survivor',
};

