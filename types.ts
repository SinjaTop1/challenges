export enum Category {
  MOVEMENT = 'Movement',
  FOOD = 'Food',
  FIRE_SHELTER = 'Fire/Shelter',
  TOOLS = 'Tools',
  SYSTEMS = 'Systems',
  NAVIGATION = 'Navigation',
  SOCIAL_MINDSET = 'Social/Mindset',
  PREPARATION = 'Preparation'
}

export enum Level {
  INITIATE = 'Initiate',
  OPERATOR = 'Operator',
  SURVIVOR = 'Survivor'
}

export interface ChallengeLevelDetail {
  description: string;
}

export interface Challenge {
  id: string;
  title: string;
  category: Category;
  levels: {
    [Level.INITIATE]: string;
    [Level.OPERATOR]: string;
    [Level.SURVIVOR]: string;
  };
}

export interface Badge {
  name: string;
  icon: string;
  description: string;
  criteria: string;
}
