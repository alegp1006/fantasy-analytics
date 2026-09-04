export interface SearchName {
  title: Title;
  suggestions: Suggestion[];
}

export interface Suggestion {
  type: string;
  id: string;
  score: number;
  name: string;
  isCoach: boolean;
  teamId: number;
  teamName: string;
}

export interface Title {
  key: string;
  value: string;
}
