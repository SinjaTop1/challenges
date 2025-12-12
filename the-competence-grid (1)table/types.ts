import { LucideIcon } from 'lucide-react';

export type DifficultyLevel = 1 | 3 | 5;

export interface Challenge {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  challenges: Challenge[];
}

export interface Rank {
  name: string;
  min: number;
  max: number; // inclusive
  color: string;
}

export interface CompletedState {
  [key: string]: boolean; // format: "challengeId-level"
}
