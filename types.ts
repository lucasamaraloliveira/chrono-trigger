export interface Tech {
  name: string;
  mp: number;
  effect: string;
}

export interface Character {
  id: string;
  name: string;
  fullName?: string;
  bio: string;
  element: string;
  weapon: string;
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
  title: string;
  condition: string;
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