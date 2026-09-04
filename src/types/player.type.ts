export interface PlayerData {
  id: number;
  name: string;
  birthDate: BirthDate;
  contractEnd: BirthDate;
  isCoach: boolean;
  isCaptain: boolean;
  gender: Gender;
  primaryTeam: PrimaryTeam;
  positionDescription: PositionDescription;
  injuryInformation: null;
  internationalDuty: null;
  playerInformation: PlayerInformation[];
  mainLeague: MainLeague;
  trophies: Trophies;
  recentMatches: RecentMatch[];
  matchesUrl: string;
  careerHistory: CareerHistory;
  traits: Traits;
  meta: Meta;
  coachStats: null;
  statSeasons: StatSeason[];
  firstSeasonStats: FirstSeasonStats;
  status: string;
  marketValues: MarketValues;
  relatedLinksData: RelatedLinksData;
  nextMatch: NextMatch;
  dataProvider: string;
  initialMatchesPage: InitialMatchesPage;
}

export interface BirthDate {
  utcTime: Date;
  timezone: string;
}

export interface CareerHistory {
  showFootnote: boolean;
  careerItems: CareerItems;
  fullCareer: boolean;
}

export interface CareerItems {
  senior: NationalTeam;
  youth: Youth;
  "national team": NationalTeam;
}

export interface NationalTeam {
  teamEntries: TeamEntry[];
  seasonEntries: NationalTeamSeasonEntry[];
}

export interface NationalTeamSeasonEntry {
  seasonName: string;
  appearances: string;
  goals: string;
  assists: string;
  rating: RatingClass;
  tournamentStats: TournamentStat[];
  teamId: number;
  team: string;
  teamGender: Gender;
  showTeamGender: boolean;
  transferType: TransferType | null;
}

export interface RatingClass {
  rating: null | string;
}

export type Gender = "male";

export interface TournamentStat {
  isFriendly: boolean;
  leagueId?: number;
  leagueName: string;
  seasonName: string;
  tournamentId: number;
  goals: string;
  assists: string;
  appearances: string;
  rating: RatingClass;
}

export interface TransferType {
  text: string;
  localizationKey: string;
}

export interface TeamEntry {
  participantId: number;
  teamId: number;
  team: string;
  teamGender: Gender;
  showTeamGender: boolean;
  transferType: TransferType | null;
  startDate: string;
  endDate: null | string;
  active: boolean;
  role: null;
  appearances: null | string;
  goals: null | string;
  assists: null | string;
  hasUncertainData: boolean;
}

export interface Youth {
  teamEntries: TeamEntry[];
  seasonEntries: YouthSeasonEntry[];
}

export interface YouthSeasonEntry {
  seasonName: string;
  appearances: string;
  goals: string;
  assists: string;
  rating: RatingClass;
  tournamentStats: TournamentStat[];
  teamId: number;
  team: Team;
  teamGender: Gender;
  showTeamGender: boolean;
  transferType: null;
}

export type Team =
  | "Monaco U19"
  | "Monaco"
  | "Paris Saint-Germain"
  | "Real Madrid";

export interface FirstSeasonStats {
  sectionOrder: string[];
  shotmap: Shotmap[];
  statsSection: StatsSection;
  topStatCard: TopStatCard;
  heatmap: Heatmap;
  keeperShotmap: null;
}

export interface Heatmap {
  coordinates: Coordinate[];
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface Shotmap {
  id: number;
  playerName: PlayerNameEnum;
  eventType: EventType;
  shotType: ShotType;
  situation: Situation;
  teamId: number;
  playerId: number;
  x: number;
  y: number;
  min: number;
  period: Period;
  isOwnGoal: boolean;
  isBlocked: boolean;
  isOnTarget: boolean;
  isSavedOffLine: boolean;
  isFromInsideBox: boolean;
  blockedX?: number;
  blockedY?: number;
  goalCrossedY: number;
  goalCrossedZ: number;
  expectedGoals: number;
  expectedGoalsOnTarget: number;
  onGoalShot: OnGoalShot;
  box: Box;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamName: HomeTeamName;
  awayTeamName: Name;
  homeScore: number;
  awayScore: number;
  matchId: number;
  matchDate: Date;
  teamColor: Color;
  teamColorDark: ColorAlternate;
  minAdded?: number;
}

export type Name = "Real Madrid" | "Real Sociedad" | "Málaga";

export type Box = "OutsideBox" | "InsideBox";

export type EventType = "AttemptSaved" | "Miss" | "Goal";

export type HomeTeamName = "Espanyol" | "Real Madrid";

export interface OnGoalShot {
  x: number;
  y: number;
  zoomRatio: number;
}

export type Period = "FirstHalf" | "SecondHalf";

export type PlayerNameEnum = "Kylian Mbappé";

export type ShotType = "RightFoot" | "Header" | "LeftFoot";

export type Situation = "RegularPlay" | "FastBreak" | "FromCorner" | "FreeKick";

export type Color = "#085098";

export type ColorAlternate = "#FFFFFF";

export interface StatsSection {
  id: string;
  items: StatsSectionItem[];
  localizedTitleId: string;
  title: string;
  type: string;
}

export interface StatsSectionItem {
  display: string;
  items: ItemItem[];
  localizedTitleId: string;
  title: string;
  type: string;
}

export interface ItemItem {
  localizedTitleId: string;
  per90: number;
  percentileRank: number;
  percentileRankPer90: number;
  statFormat: StatFormat;
  statValue: string;
  title: string;
}

export type StatFormat = "number" | "fraction" | "percent";

export interface TopStatCard {
  display: string;
  id: string;
  items: ItemItem[];
  type: string;
}

export interface InitialMatchesPage {
  matches: Match[];
  previous: string;
}

export interface Match {
  teamId: number;
  teamName: MatchTeamName;
  opponentTeamId: number;
  opponentTeamName: string;
  isHomeTeam: boolean;
  id: number;
  matchDate: MatchDate;
  matchPageUrl: string;
  leagueId: number;
  leagueName: string;
  stage: null | string;
  homeScore: number;
  awayScore: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  ratingProps: MatchRatingProps;
  playerOfTheMatch: boolean;
  onBench: boolean;
  lineupPositionId?: number;
  playedInMatch: boolean;
}

export interface MatchDate {
  utcTime: Date;
}

export interface MatchRatingProps {
  rating: string;
  isTopRating: boolean;
}

export type MatchTeamName = "Real Madrid" | "France";

export interface MainLeague {
  leagueId: number;
  leagueName: string;
  season: string;
  stats: Stat[];
}

export interface Stat {
  title: string;
  localizedTitleId: string;
  value: number;
}

export interface MarketValues {
  values: ValueElement[];
}

export interface ValueElement {
  date: Date;
  value: number;
  currency: Currency;
  lowerBound: number;
  upperBound: number;
  source: Source;
  teamId: number;
  teamName: Team;
  isPeriodStart?: boolean;
}

export type Currency = "EUR";

export type Source = "scisports";

export interface Meta {
  seopath: string;
  pageurl: string;
  faqJSONLD: FAQJSONLD;
  personJSONLD: PersonJSONLD;
  breadcrumbJSONLD: BreadcrumbJSONLD;
}

export interface BreadcrumbJSONLD {
  "@context": string;
  "@type": string;
  itemListElement: ItemListElement[];
}

export interface ItemListElement {
  "@type": string;
  position: number;
  name: string;
  item: string;
}

export interface FAQJSONLD {
  "@context": string;
  "@type": string;
  mainEntity: MainEntity[];
}

export interface MainEntity {
  "@type": string;
  name: string;
  acceptedAnswer: AcceptedAnswer;
}

export interface AcceptedAnswer {
  "@type": string;
  text: string;
}

export interface PersonJSONLD {
  "@context": string;
  "@type": string;
  name: PlayerNameEnum;
  birthDate: Date;
  url: string;
  nationality: Affiliation;
  affiliation: Affiliation;
  gender: string;
  height: Eight;
  weight: Eight;
}

export interface Affiliation {
  "@type": string;
  name: MatchTeamName;
}

export interface Eight {
  "@type": string;
  unitText: string;
  value: string;
}

export interface NextMatch {
  matchId: number;
  homeId: number;
  awayId: number;
  homeName: string;
  awayName: Name;
  matchDate: Date;
  statusId: number;
  leagueId: number;
  parentLeagueId: number;
  leagueName: string;
  status: Status;
  stadium: Stadium;
  matchUrl: string;
}

export interface Stadium {
  venue: string;
  city: string;
  lat: number;
  long: number;
}

export interface Status {
  utcTime: Date;
  started: boolean;
  cancelled: boolean;
  finished: boolean;
}

export interface PlayerInformation {
  value: PlayerInformationValue;
  title: string;
  translationKey: string;
  icon?: Icon;
  countryCode?: CountryCode;
}

export type CountryCode = "INT" | "FRA";

export interface Icon {
  type: string;
  id: CountryCode;
}

export interface PlayerInformationValue {
  numberValue?: number;
  key: null | string;
  fallback: BirthDate | number | string;
  options?: Options;
  dateValue?: Date;
}

export interface Options {
  style?: string;
  unit?: string;
  unitDisplay?: string;
}

export interface PositionDescription {
  positions: Position[];
  primaryPosition: PrimaryPosition;
  nonPrimaryPositions: unknown[];
}

export interface Position {
  strPos: PrimaryPosition;
  strPosShort: PrimaryPosition;
  occurences: number;
  position: string;
  isMainPosition: boolean;
  pitchPositionData: PitchPositionData | null;
}

export interface PitchPositionData {
  right: number;
  top: number;
}

export interface PrimaryPosition {
  label: string;
  key: string;
}

export interface PrimaryTeam {
  teamId: number;
  teamName: Name;
  onLoan: boolean;
  teamColors: TeamColors;
}

export interface TeamColors {
  color: Color;
  colorAlternate: ColorAlternate;
  colorAway: string;
  colorAwayAlternate: string;
}

export interface RecentMatch {
  teamId: number;
  teamName: MatchTeamName;
  opponentTeamId: number;
  opponentTeamName: string;
  isHomeTeam: boolean;
  id: number;
  matchDate: MatchDate;
  matchPageUrl: string;
  leagueId: number;
  leagueName: string;
  stage: null | string;
  homeScore: number;
  awayScore: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  ratingProps: RecentMatchRatingProps;
  playerOfTheMatch: boolean;
  onBench: boolean;
  lineupPositionId?: number;
  playedInMatch: boolean;
}

export interface RecentMatchRatingProps {
  rating: number | string;
  isTopRating: boolean;
}

export interface RelatedLinksData {
  teammates: MensNationalTeam[];
  mensNationalTeam: MensNationalTeam[];
  womensNationalTeam: unknown[];
}

export interface MensNationalTeam {
  id: number;
  name: string;
}

export interface StatSeason {
  seasonName: string;
  tournaments: StatSeasonTournament[];
}

export interface StatSeasonTournament {
  name: string;
  tournamentId: number;
  entryId: string;
  hasDeepStats: boolean;
}

export interface Traits {
  key: string;
  title: string;
  items: TraitsItem[];
}

export interface TraitsItem {
  key: string;
  title: string;
  value: number;
}

export interface Trophies {
  playerTrophies: PlayerTrophy[];
  coachTrophies: unknown[];
}

export interface PlayerTrophy {
  ccode?: string;
  teamId: number;
  teamName: string;
  tournaments: PlayerTrophyTournament[];
}

export interface PlayerTrophyTournament {
  ccode: CountryCode;
  leagueId: number;
  leagueName: string;
  seasonsWon: string[];
  seasonsRunnerUp: string[];
}
