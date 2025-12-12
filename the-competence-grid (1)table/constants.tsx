import { 
  Footprints, 
  Fish, 
  Flame, 
  Wrench, 
  ShieldCheck, 
  Brain, 
} from 'lucide-react';
import { Category, Rank } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'movement',
    title: 'Movement & Endurance',
    icon: Footprints,
    challenges: [
      { id: 'walk', name: 'Walk 100 km per year' },
      { id: 'nav', name: 'Navigate without GPS' },
      { id: 'bike', name: 'Bicycle maintenance' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Water',
    icon: Fish,
    challenges: [
      { id: 'fish', name: 'Catch a fish' },
      { id: 'water', name: 'Purify water' },
      { id: 'cook', name: 'Cook food from raw ingredients' },
    ],
  },
  {
    id: 'fire',
    title: 'Fire & Shelter',
    icon: Flame,
    challenges: [
      { id: 'fire_light', name: 'Light a fire' },
      { id: 'camp', name: 'Camp overnight' },
      { id: 'shelter', name: 'Build a shelter' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Repairs',
    icon: Wrench,
    challenges: [
      { id: 'rope', name: 'Rope work' },
      { id: 'knife', name: 'Sharpen a knife' },
      { id: 'sew', name: 'Sew / repair clothing' },
      { id: 'wood', name: 'Woodwork' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Home Safety',
    icon: ShieldCheck,
    challenges: [
      { id: 'car', name: 'Car maintenance' },
      { id: 'electric', name: 'Learn basic electricity' },
      { id: 'kit', name: 'Emergency kit' },
      { id: 'drill', name: 'Emergency drill' },
      { id: 'reinforce', name: 'Reinforce your household' },
    ],
  },
  {
    id: 'mindset',
    title: 'Mindset & Social Competence',
    icon: Brain,
    challenges: [
      { id: 'speak', name: 'Speak to 10 strangers' },
      { id: 'panic', name: 'Panic control' },
      { id: 'nomoney', name: '24-hour no-money challenge' },
    ],
  },
];

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
