export interface TableData {
  data: Data;
  tableFilterTypes: string[];
  teamForm: { [key: string]: TeamForm[] };
  nextOpponent: { [key: string]: Array<NextOpponent | string> };
  tableHeader: TableHeader;
}

export interface Data {
  ccode: string;
  leagueId: number;
  pageUrl: string;
  leagueName: string;
  legend: Legend[];
  ongoing: unknown[];
  table: TableClass;
  tableFilterTypes: string[];
  composite: boolean;
  isCurrentSeason: boolean;
}

export interface Legend {
  title: string;
  tKey: string;
  color: Color;
  indices: number[];
}

export type Color = "#2AD572" | "#0046A7" | "#02CCF0" | "#FF4646";

export interface TableClass {
  all: All[];
  home: All[];
  away: All[];
  form: All[];
  xg: Xg[];
}

export interface All {
  name: string;
  shortName: string;
  id: number;
  pageUrl: string;
  deduction?: null;
  ongoing: null;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  scoresStr: string;
  goalConDiff: number;
  pts: number;
  idx: number;
  qualColor: Color | null;
  goalsScored?: number;
  featuredInMatch?: boolean;
}

export interface Xg {
  name: string;
  shortName: string;
  id: number;
  pageUrl: string;
  ongoing: null;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  scoresStr: string;
  goalConDiff: number;
  pts: number;
  teamId: number;
  teamName: string;
  xg: number;
  xgConceded: number;
  xPoints: number;
  position: number;
  xgDiff: number;
  xgConcededDiff: number;
  xPointsDiff: number;
  xPosition: number;
  idx: number;
  xPositionDiff: number;
  qualColor: Color | null;
}

export interface NextOpponent {
  id: string;
  name: string;
  shortName: string;
  isOurTeam?: boolean;
}

export interface TableHeader {
  staticTableHeaders: string[];
  dynamicTableHeaders: string[];
}

export interface TeamForm {
  result: number;
  resultString: ResultString;
  imageUrl: string;
  linkToMatch: string;
  date: null;
  teamPageUrl: string;
  tooltipText: TooltipText;
  score: string;
  home: NextOpponent;
  away: NextOpponent;
}

export type ResultString = "D" | "L" | "W";

export interface TooltipText {
  utcTime: Date;
  homeTeam: string;
  homeTeamId: number;
  homeScore: number;
  awayTeam: string;
  awayTeamId: number;
  awayScore: number;
}
