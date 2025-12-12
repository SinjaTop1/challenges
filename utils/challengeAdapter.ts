import { CHALLENGES } from '../constants';
import { Category as MainCategory } from '../types';
import { 
  Footprints, 
  Fish, 
  Flame, 
  Wrench, 
  ShieldCheck, 
  Brain,
  Compass,
  BookOpen,
} from 'lucide-react';
import { Category, Challenge as TableChallenge } from '../types/gridTypes';

// Map main app categories to table categories
const categoryIconMap: Record<MainCategory, any> = {
  [MainCategory.MOVEMENT]: Footprints,
  [MainCategory.FOOD]: Fish,
  [MainCategory.FIRE_SHELTER]: Flame,
  [MainCategory.TOOLS]: Wrench,
  [MainCategory.SYSTEMS]: ShieldCheck,
  [MainCategory.SOCIAL_MINDSET]: Brain,
  [MainCategory.NAVIGATION]: Compass,
  [MainCategory.PREPARATION]: BookOpen,
};

const categoryIdMap: Record<MainCategory, string> = {
  [MainCategory.MOVEMENT]: 'movement',
  [MainCategory.FOOD]: 'food',
  [MainCategory.FIRE_SHELTER]: 'fire',
  [MainCategory.TOOLS]: 'tools',
  [MainCategory.SYSTEMS]: 'systems',
  [MainCategory.SOCIAL_MINDSET]: 'mindset',
  [MainCategory.NAVIGATION]: 'navigation',
  [MainCategory.PREPARATION]: 'preparation',
};

const categoryTitleMap: Record<MainCategory, string> = {
  [MainCategory.MOVEMENT]: 'Movement & Endurance',
  [MainCategory.FOOD]: 'Food & Water',
  [MainCategory.FIRE_SHELTER]: 'Fire & Shelter',
  [MainCategory.TOOLS]: 'Tools & Repairs',
  [MainCategory.SYSTEMS]: 'Systems & Home Safety',
  [MainCategory.SOCIAL_MINDSET]: 'Mindset & Social Competence',
  [MainCategory.NAVIGATION]: 'Navigation',
  [MainCategory.PREPARATION]: 'Preparation & Safety',
};

export const adaptChallengesToTableFormat = (): Category[] => {
  // Group challenges by category
  const challengesByCategory: Record<MainCategory, any[]> = {
    [MainCategory.MOVEMENT]: [],
    [MainCategory.FOOD]: [],
    [MainCategory.FIRE_SHELTER]: [],
    [MainCategory.TOOLS]: [],
    [MainCategory.SYSTEMS]: [],
    [MainCategory.SOCIAL_MINDSET]: [],
    [MainCategory.NAVIGATION]: [],
    [MainCategory.PREPARATION]: [],
  };

  // Group challenges
  CHALLENGES.forEach(challenge => {
    challengesByCategory[challenge.category].push({
      id: challenge.id,
      name: challenge.title,
    });
  });

  // Convert to table format
  return Object.entries(challengesByCategory)
    .filter(([_, challenges]) => challenges.length > 0)
    .map(([category, challenges]) => ({
      id: categoryIdMap[category as MainCategory],
      title: categoryTitleMap[category as MainCategory],
      icon: categoryIconMap[category as MainCategory],
      challenges: challenges as TableChallenge[],
    }));
};

