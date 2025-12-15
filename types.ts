export interface Tech {
  name: string;
  mp?: number; // Optional because some might not have MP listed or valid for all context
  effect: string;
}

export interface DualTech {
  name: string;
  characters: string;
  element: string;
  effect: string;
  strategy: string;
}

export interface Character {
  id: string;
  name: string;
  fullName?: string;
  bio: string; // "Papel Chave na História" can be merged here or separate
  role: string; // New field for "Papel Chave na História"
  element: string;
  weapon: string; // e.g. "Katana (Espada)"
  techs: Tech[];
  color: string;
  image?: string;
}

export interface WalkthroughStep {
  title: string;
  era: string;
  content: string;
  boss?: {
    name: string;
    difficulty: string;
    strategy: string;
  };
  items?: string[];
}

export interface Ending {
  id: number;
  name: string;
  inflectionPoint: string;
  condition: string;
  implication: string;
}

export interface Item {
  name: string;
  effect: string;
  strategy?: string; // "Vantagem Estratégica"
  category: 'Consumable' | 'Weapon' | 'Armor' | 'Accessory' | 'KeyItem';
  source?: string;
}

export enum Eras {
  PRESENT = "1000 A.D.",
  MIDDLE_AGES = "600 A.D.",
  FUTURE = "2300 A.D.",
  PREHISTORIC = "65000000 B.C.",
  DARK_AGES = "12000 B.C.",
  END_OF_TIME = "End of Time",
  VARIOUS = "Various Eras"
}