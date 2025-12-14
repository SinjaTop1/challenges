import { Category, Challenge, Level, Badge } from './types';
import { Compass, Hammer, Shield, BookOpen, Anchor, Mountain, Zap, Star, Trophy, Target } from 'lucide-react';
import React from 'react';

export const CHALLENGES: Challenge[] = [
  {
    id: 'walk-100',
    title: 'Walk Distance (Annual)',
    category: Category.MOVEMENT,
    description: 'Approach this as a consistency challenge—focus on footwear, pacing, and integration into daily life.',
    whatYouLearn: 'Discipline through repetition, endurance without intensity, and how small efforts accumulate.',
    levels: {
      [Level.INITIATE]: 'Walk 2 km daily for one week.',
      [Level.OPERATOR]: 'Walk 5 km daily for one month.',
      [Level.SURVIVOR]: 'Accumulate 1,000 km total over the year.',
    }
  },
  {
    id: 'navigate-gps',
    title: 'Navigate Without GPS',
    category: Category.NAVIGATION,
    description: 'Develop spatial awareness and confidence by navigating without digital tools.',
    whatYouLearn: 'Orientation, decision-making, and environmental awareness.',
    levels: {
      [Level.INITIATE]: 'Navigate a 2 km route in a familiar area using only landmarks.',
      [Level.OPERATOR]: 'Plan and complete a 10 km hike using a printed map and compass.',
      [Level.SURVIVOR]: 'Complete a multi-day route (minimum 30 km) using only analog navigation tools.',
    }
  },
  {
    id: 'bicycle',
    title: 'Bicycle Maintenance',
    category: Category.TOOLS,
    description: 'Understand the bicycle as a system of simple, interdependent parts.',
    whatYouLearn: 'Mechanics, problem-solving, and independence in mobility.',
    levels: {
      [Level.INITIATE]: 'Fix a flat tire and adjust brakes.',
      [Level.OPERATOR]: 'Perform a full tune-up—chain cleaning, gear adjustment, and brake calibration.',
      [Level.SURVIVOR]: 'Rebuild or restore a used bicycle to full working condition.',
    }
  },
  {
    id: 'catch-fish',
    title: 'Catch a Fish',
    category: Category.FOOD,
    description: 'Focus on the process rather than success.',
    whatYouLearn: 'Patience, respect for resources, and awareness of food systems.',
    levels: {
      [Level.INITIATE]: 'Learn basic fishing techniques and catch a fish with guidance.',
      [Level.OPERATOR]: 'Catch, clean, and cook a fish independently.',
      [Level.SURVIVOR]: 'Sustain a full meal for two people from self-caught fish using natural bait and minimal tools.',
    }
  },
  {
    id: 'purify-water',
    title: 'Purify Water',
    category: Category.FOOD,
    description: 'Treat this as a risk-assessment and problem-solving exercise.',
    whatYouLearn: 'Critical thinking, basic chemistry, and appreciation for clean water access.',
    levels: {
      [Level.INITIATE]: 'Learn and demonstrate three water purification methods.',
      [Level.OPERATOR]: 'Purify and safely drink water from a natural source using a portable filter or boiling.',
      [Level.SURVIVOR]: 'Build a functional solar still or improvised filtration system and test its effectiveness.',
    }
  },
  {
    id: 'cook-food',
    title: 'Cook From Raw Ingredients',
    category: Category.FOOD,
    description: 'Reverse convenience by planning, preparing, and transforming basic inputs.',
    whatYouLearn: 'Self-reliance, budgeting, and control over consumption.',
    levels: {
      [Level.INITIATE]: 'Cook a full meal from raw ingredients without pre-made sauces or mixes.',
      [Level.OPERATOR]: 'Plan and cook three balanced meals for a day using only whole ingredients.',
      [Level.SURVIVOR]: 'Prepare a three-day meal plan using only locally sourced or self-grown ingredients.',
    }
  },
  {
    id: 'light-fire',
    title: 'Light a Fire',
    category: Category.FIRE_SHELTER,
    description: 'Treat fire as a tool, focusing on safety, control, and sustainability.',
    whatYouLearn: 'Responsibility, patience, and respect for powerful systems.',
    levels: {
      [Level.INITIATE]: 'Build and light a fire using matches or a lighter.',
      [Level.OPERATOR]: 'Build and sustain a fire using only natural tinder and a ferro rod.',
      [Level.SURVIVOR]: 'Start a fire in wet or windy conditions using primitive methods (e.g., bow drill).',
    }
  },
  {
    id: 'camp-overnight',
    title: 'Camp Overnight',
    category: Category.FIRE_SHELTER,
    description: 'Focus on comfort outside routine.',
    whatYouLearn: 'Adaptability, mental resilience, and comfort with uncertainty.',
    levels: {
      [Level.INITIATE]: 'Camp overnight in a designated campsite with full gear.',
      [Level.OPERATOR]: 'Camp overnight in a remote area with minimal equipment.',
      [Level.SURVIVOR]: 'Complete a two-night solo camp using only essential gear and self-built fire/shelter.',
    }
  },
  {
    id: 'build-shelter',
    title: 'Build a Shelter',
    category: Category.FIRE_SHELTER,
    description: 'Focus on protection, thinking about wind, rain, insulation, and stability.',
    whatYouLearn: 'Planning under constraints and understanding basic physical principles.',
    levels: {
      [Level.INITIATE]: 'Set up a tent or tarp shelter.',
      [Level.OPERATOR]: 'Build a temporary shelter using natural materials.',
      [Level.SURVIVOR]: 'Construct a weather-resistant shelter capable of overnight use in the wild.',
    }
  },
  {
    id: 'sos-signals',
    title: 'SOS & Emergency Signals',
    category: Category.PREPARATION,
    description: 'Approach from a rescuer\'s perspective.',
    whatYouLearn: 'Communication under pressure and realistic emergency thinking.',
    levels: {
      [Level.INITIATE]: 'Learn and demonstrate three basic SOS methods (light, sound, ground).',
      [Level.OPERATOR]: 'Create a visible signal system for a simulated rescue scenario.',
      [Level.SURVIVOR]: 'Execute a full emergency signaling plan in a remote area, including location marking and visibility testing.',
    }
  },
  {
    id: 'rope-work',
    title: 'Rope Work & Knots',
    category: Category.TOOLS,
    description: 'Think about load, tension, and safety.',
    whatYouLearn: 'Applied physics, safety awareness, and practical problem-solving.',
    levels: {
      [Level.INITIATE]: 'Learn five essential knots and their uses.',
      [Level.OPERATOR]: 'Apply knots in real scenarios (camping, hauling, repairs).',
      [Level.SURVIVOR]: 'Build a functional rope system (e.g., pulley, shelter rig, or rescue line).',
    }
  },
  {
    id: 'sharpen-knife',
    title: 'Sharpen a Knife',
    category: Category.TOOLS,
    description: 'Focus on consistency and control.',
    whatYouLearn: 'Precision, patience, and care for equipment.',
    levels: {
      [Level.INITIATE]: 'Learn sharpening basics using a whetstone or guided tool.',
      [Level.OPERATOR]: 'Sharpen and maintain multiple blades to working condition.',
      [Level.SURVIVOR]: 'Restore a dull or damaged blade to full sharpness manually.',
    }
  },
  {
    id: 'sew',
    title: 'Sewing & Clothing Repair',
    category: Category.TOOLS,
    description: 'Treat clothing as maintainable.',
    whatYouLearn: 'Resourcefulness and a repair-oriented mindset.',
    levels: {
      [Level.INITIATE]: 'Sew a button or patch by hand.',
      [Level.OPERATOR]: 'Repair a torn seam or zipper.',
      [Level.SURVIVOR]: 'Modify or repurpose old clothing into functional gear.',
    }
  },
  {
    id: 'woodwork',
    title: 'Woodwork',
    category: Category.TOOLS,
    description: 'Work with constraints: material, tools, and accuracy.',
    whatYouLearn: 'Planning, measurement, and translating ideas into physical results.',
    levels: {
      [Level.INITIATE]: 'Create a simple wooden object (e.g., spoon, box).',
      [Level.OPERATOR]: 'Build a small functional item using hand tools only.',
      [Level.SURVIVOR]: 'Design and complete a complex project requiring joinery or precision fitting.',
    }
  },
  {
    id: 'car-maint',
    title: 'Car Maintenance',
    category: Category.SYSTEMS,
    description: 'Think in terms of failure scenarios.',
    whatYouLearn: 'Mechanical confidence and reduced dependency on external help.',
    levels: {
      [Level.INITIATE]: 'Learn to check oil, tire pressure, and fluids.',
      [Level.OPERATOR]: 'Replace a tire and perform basic maintenance tasks.',
      [Level.SURVIVOR]: 'Diagnose and fix a minor mechanical issue independently.',
    }
  },
  {
    id: 'electricity',
    title: 'Learn Basic Electricity',
    category: Category.SYSTEMS,
    description: 'Approach electricity as a logical system.',
    whatYouLearn: 'System thinking and technical confidence.',
    levels: {
      [Level.INITIATE]: 'Learn to safely use a multimeter and identify circuits.',
      [Level.OPERATOR]: 'Wire a simple circuit or repair a household electrical issue.',
      [Level.SURVIVOR]: 'Build a small off-grid power setup (e.g., solar light or battery system).',
    }
  },
  {
    id: 'emergency-kit',
    title: 'Emergency Kit',
    category: Category.PREPARATION,
    description: 'Prioritize what matters when systems fail.',
    whatYouLearn: 'Preparedness without paranoia and practical decision-making.',
    levels: {
      [Level.INITIATE]: 'Assemble a basic home emergency kit.',
      [Level.OPERATOR]: 'Build a portable go-bag for 72-hour survival.',
      [Level.SURVIVOR]: 'Create a modular kit adaptable for multiple scenarios (home, car, outdoors).',
    }
  },
  {
    id: 'emergency-drill',
    title: 'Emergency Drill',
    category: Category.PREPARATION,
    description: 'Focus on calm execution, not speed.',
    whatYouLearn: 'Decision-making under stress and responsibility for others.',
    levels: {
      [Level.INITIATE]: 'Conduct a simple household evacuation drill.',
      [Level.OPERATOR]: 'Simulate a multi-scenario emergency (fire, power outage, flood).',
      [Level.SURVIVOR]: 'Lead a group through a full emergency simulation with debrief and improvements.',
    }
  },
  {
    id: 'reinforce-household',
    title: 'Reinforce Your Household',
    category: Category.PREPARATION,
    description: 'Identify weak points and small improvements.',
    whatYouLearn: 'Risk awareness and proactive problem prevention.',
    levels: {
      [Level.INITIATE]: 'Inspect and list potential household vulnerabilities.',
      [Level.OPERATOR]: 'Implement three improvements (e.g., locks, lighting, storage).',
      [Level.SURVIVOR]: 'Complete a full home safety audit and reinforcement plan.',
    }
  },
  {
    id: 'turn-off-utilities',
    title: 'Turn Off Utilities',
    category: Category.SYSTEMS,
    description: 'Understand when and why these actions matter.',
    whatYouLearn: 'System awareness and safety competence.',
    levels: {
      [Level.INITIATE]: 'Learn how to safely turn off water, gas, and electricity.',
      [Level.OPERATOR]: 'Practice turning off and restoring utilities safely.',
      [Level.SURVIVOR]: 'Execute a full utility shutdown and restart during a simulated emergency.',
    }
  },
  {
    id: 'strangers',
    title: 'Speak to 10 Strangers',
    category: Category.SOCIAL_MINDSET,
    description: 'Focus on managing discomfort.',
    whatYouLearn: 'Social confidence and emotional regulation.',
    levels: {
      [Level.INITIATE]: 'Start conversations with three strangers in one day.',
      [Level.OPERATOR]: 'Speak to ten strangers over a week, initiating meaningful exchanges.',
      [Level.SURVIVOR]: 'Hold a five-minute conversation with a stranger daily for two weeks.',
    }
  },
  {
    id: 'panic-control',
    title: 'Panic Control',
    category: Category.SOCIAL_MINDSET,
    description: 'Treat this as training, not therapy.',
    whatYouLearn: 'Self-regulation and resilience under pressure.',
    levels: {
      [Level.INITIATE]: 'Learn and practice three breathing or grounding techniques.',
      [Level.OPERATOR]: 'Apply techniques during a stressful or simulated panic situation.',
      [Level.SURVIVOR]: 'Maintain composure and control during a real high-stress event.',
    }
  },
  {
    id: 'no-money',
    title: '24-Hour No-Money Challenge',
    category: Category.SOCIAL_MINDSET,
    description: 'Approach as a creativity and constraint exercise.',
    whatYouLearn: 'Adaptability, humility, and appreciation for systems you rely on.',
    levels: {
      [Level.INITIATE]: 'Spend one day without spending money.',
      [Level.OPERATOR]: 'Spend 24 hours relying only on existing resources and barter.',
      [Level.SURVIVOR]: 'Spend 48 hours self-sufficiently without money or external help.',
    }
  },
  {
    id: 'document-prep',
    title: 'Document Preparation',
    category: Category.PREPARATION,
    description: 'Focus on redundancy and foresight.',
    whatYouLearn: 'Long-term thinking and reduced mental load.',
    levels: {
      [Level.INITIATE]: 'Gather and organize essential personal documents.',
      [Level.OPERATOR]: 'Create digital backups and secure storage for all critical files.',
      [Level.SURVIVOR]: 'Develop a full redundancy plan including emergency access and trusted contacts.',
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
