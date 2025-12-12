import { Category, Challenge, Level, Badge } from './types';
import { Compass, Hammer, Shield, BookOpen, Anchor, Mountain, Zap, Star, Trophy, Target } from 'lucide-react';
import React from 'react';

export const CHALLENGES: Challenge[] = [
  {
    id: 'walk-100',
    title: 'Walk 100 km per year',
    category: Category.MOVEMENT,
    levels: {
      [Level.INITIATE]: '50 km',
      [Level.OPERATOR]: '100 km',
      [Level.SURVIVOR]: '200 km',
    }
  },
  {
    id: 'catch-fish',
    title: 'Catch a fish',
    category: Category.FOOD,
    levels: {
      [Level.INITIATE]: 'Buy a fresh fish directly from a fisherman',
      [Level.OPERATOR]: 'Catch a fish by any legal means',
      [Level.SURVIVOR]: 'Catch a fish entirely by yourself (gear, location, prep)',
    }
  },
  {
    id: 'car-maint',
    title: 'Car maintenance',
    category: Category.SYSTEMS,
    levels: {
      [Level.INITIATE]: 'Change a tire',
      [Level.OPERATOR]: 'Tire + battery/accumulator',
      [Level.SURVIVOR]: 'Full check as if car was abandoned',
    }
  },
  {
    id: 'light-fire',
    title: 'Light a fire',
    category: Category.FIRE_SHELTER,
    levels: {
      [Level.INITIATE]: 'Any fire without matches',
      [Level.OPERATOR]: 'Same, but in the forest',
      [Level.SURVIVOR]: 'Keep the fire alive for 5 hours',
    }
  },
  {
    id: 'emergency-kit',
    title: 'Emergency kit',
    category: Category.PREPARATION,
    levels: {
      [Level.INITIATE]: 'Make an emergency kit/bag with whatever you already have',
      [Level.OPERATOR]: 'Get a full kit (we provide a guide)',
      [Level.SURVIVOR]: 'First-aid competence + fully understand the kit',
    }
  },
  {
    id: 'rope-work',
    title: 'Rope work',
    category: Category.TOOLS,
    levels: {
      [Level.INITIATE]: 'Learn 1 heavy-duty knot',
      [Level.OPERATOR]: 'Learn all basic knots',
      [Level.SURVIVOR]: 'Build something useful from rope (hammock, logs, shelter)',
    }
  },
  {
    id: 'camp-overnight',
    title: 'Camp overnight',
    category: Category.FIRE_SHELTER,
    levels: {
      [Level.INITIATE]: 'Camp at a campsite (not home)',
      [Level.OPERATOR]: 'Sleep somewhere outside (non-designated)',
      [Level.SURVIVOR]: 'Camp independently',
    }
  },
  {
    id: 'woodwork',
    title: 'Woodwork',
    category: Category.TOOLS,
    levels: {
      [Level.INITIATE]: 'Learn to use basic tools',
      [Level.OPERATOR]: 'Make something simple',
      [Level.SURVIVOR]: 'Complete a small woodworking course',
    }
  },
  {
    id: 'turn-off-utilities',
    title: 'Turn off utilities',
    category: Category.SYSTEMS,
    levels: {
      [Level.INITIATE]: 'Don’t turn off water (just learn locations)',
      [Level.OPERATOR]: 'Turn off water safely',
      [Level.SURVIVOR]: 'Understand shutoffs + risks (safety guide)',
    }
  },
  {
    id: 'electricity',
    title: 'Learn basic electricity',
    category: Category.SYSTEMS,
    levels: {
      [Level.INITIATE]: 'Change a socket',
      [Level.OPERATOR]: 'Build a simple battery circuit',
      [Level.SURVIVOR]: 'Use an electric generator/motor',
    }
  },
  {
    id: 'emergency-drill',
    title: 'Emergency drill',
    category: Category.PREPARATION,
    levels: {
      [Level.INITIATE]: 'Plan an emergency drill/evacuation',
      [Level.OPERATOR]: 'Actually practice it',
      [Level.SURVIVOR]: 'Teach your household + run a surprise drill',
    }
  },
  {
    id: 'strangers',
    title: 'Speak to 10 strangers',
    category: Category.SOCIAL_MINDSET,
    levels: {
      [Level.INITIATE]: 'Ask anything',
      [Level.OPERATOR]: 'Ask for a small favor',
      [Level.SURVIVOR]: 'Ask someone to buy you food',
    }
  },
  {
    id: 'panic-control',
    title: 'Panic control',
    category: Category.SOCIAL_MINDSET,
    levels: {
      [Level.INITIATE]: '1 week practice',
      [Level.OPERATOR]: '1 month structured practice',
      [Level.SURVIVOR]: 'Advanced breathing + stress exposure',
    }
  },
  {
    id: 'navigate-gps',
    title: 'Navigate without GPS',
    category: Category.NAVIGATION,
    levels: {
      [Level.INITIATE]: 'A → B using printed map',
      [Level.OPERATOR]: 'Same in unknown area',
      [Level.SURVIVOR]: 'Unknown area + landmarks + asking strangers',
    }
  },
  {
    id: 'bicycle',
    title: 'Bicycle maintenance',
    category: Category.TOOLS,
    levels: {
      [Level.INITIATE]: 'Inflate/change tire',
      [Level.OPERATOR]: 'Chain + brakes + tire',
      [Level.SURVIVOR]: 'Assemble a bike from zero',
    }
  },
  {
    id: 'cook-food',
    title: 'Cook food',
    category: Category.FOOD,
    levels: {
      [Level.INITIATE]: 'Buy raw products from a farmer & cook',
      [Level.OPERATOR]: 'Cook something you usually buy (bread etc.)',
      [Level.SURVIVOR]: 'Cook a full meal with basic tools / fire',
    }
  },
  {
    id: 'build-shelter',
    title: 'Build shelter',
    category: Category.FIRE_SHELTER,
    levels: {
      [Level.INITIATE]: 'Tent camping',
      [Level.OPERATOR]: 'Shelter with materials at hand (no tent)',
      [Level.SURVIVOR]: 'Forest shelter from found materials',
    }
  },
  {
    id: 'sos-signals',
    title: 'SOS signals',
    category: Category.PREPARATION,
    levels: {
      [Level.INITIATE]: 'Campfire signal',
      [Level.OPERATOR]: 'Multiple emergency signals',
      [Level.SURVIVOR]: 'Teach + demonstrate',
    }
  },
  {
    id: 'sew',
    title: 'Sew',
    category: Category.TOOLS,
    levels: {
      [Level.INITIATE]: 'Patch a hole',
      [Level.OPERATOR]: 'Fix tears',
      [Level.SURVIVOR]: 'Craft clothing from raw material',
    }
  },
  {
    id: 'reinforce-household',
    title: 'Reinforce household',
    category: Category.PREPARATION,
    levels: {
      [Level.INITIATE]: 'Improve door lock',
      [Level.OPERATOR]: 'Reinforce doors/windows',
      [Level.SURVIVOR]: 'Full security system (physical + cameras)',
    }
  },
  {
    id: 'document-prep',
    title: 'Document preparation',
    category: Category.PREPARATION,
    levels: {
      [Level.INITIATE]: 'Basic digital backups',
      [Level.OPERATOR]: 'Physical copies',
      [Level.SURVIVOR]: 'Distributed backups + memorize contacts',
    }
  },
  {
    id: 'no-money',
    title: '24-hour no-money challenge',
    category: Category.SOCIAL_MINDSET,
    levels: {
      [Level.INITIATE]: '24 hours with no money, use what you have',
      [Level.OPERATOR]: '3 days no money',
      [Level.SURVIVOR]: 'Extreme budget survival with strict rules',
    }
  },
  {
    id: 'sharpen-knife',
    title: 'Sharpen a knife',
    category: Category.TOOLS,
    levels: {
      [Level.INITIATE]: 'Basic sharpening',
      [Level.OPERATOR]: 'Whetstone sharpening',
      [Level.SURVIVOR]: 'Sharpen tools (saws etc.)',
    }
  },
];

export const RANKS = [
  { name: 'Recruit', range: '0–9 points', description: 'Just starting out.' },
  { name: 'Capable', range: '10–24 points', description: 'Building momentum.' },
  { name: 'Competent', range: '25–49 points', description: 'Solid skills acquired.' },
  { name: 'Reliable', range: '50–79 points', description: 'Can be counted on.' },
  { name: 'Self-Reliant', range: '80–119 points', description: 'High level independence.' },
  { name: 'Elite', range: '120+ points', description: 'Mastery of the grid.' },
];

export const BADGES: Badge[] = [
  {
    name: 'Navigator',
    icon: 'compass',
    description: 'Master of finding the way.',
    criteria: 'Complete all Navigation challenges + 2 Survivor level Navigation tasks.',
  },
  {
    name: 'Builder',
    icon: 'hammer',
    description: 'Can make things from scratch.',
    criteria: 'Complete Woodwork, Sew, and Shelter challenges.',
  },
  {
    name: 'Provider',
    icon: 'anchor',
    description: 'Food and sustenance security.',
    criteria: 'Complete Catch a Fish and Cook Food challenges.',
  },
  {
    name: 'Stoic',
    icon: 'mountain',
    description: 'Unshakeable mindset.',
    criteria: 'Complete Panic Control, No Money, and Speak to Strangers challenges.',
  },
  {
    name: 'Generalist',
    icon: 'shield',
    description: 'The well-rounded expert.',
    criteria: 'Earn 50+ points across at least 5 different categories.',
  },
];

export const FAQS = [
  {
    q: 'Do I need experience?',
    a: 'No. The "Initiate" difficulty is designed for complete beginners to get their first exposure safely.',
  },
  {
    q: 'Is it safe?',
    a: 'Safety is the priority. Always use the safety overrides. If a challenge feels dangerous, scale it back or skip it. No challenge is mandatory.',
  },
  {
    q: 'What counts as proof?',
    a: 'Photo or video evidence plus a 1-sentence reflection on what you learned. Post it to social media or submit via the form.',
  },
  {
    q: 'Can I adapt challenges?',
    a: 'Yes. The spirit of the challenge matters more than the letter. Adapt to your environment, health, and local laws.',
  },
  {
    q: 'Is it competitive?',
    a: 'It can be. You can aim for the Elite rank (120+ points). To appear on the leaderboard, you must complete at least 5 Survivor-difficulty challenges.',
  },
  {
    q: 'What if I miss a month?',
    a: 'This is a self-paced year challenge. You can double up next month or extend your timeline. Just keep moving.',
  },
];
