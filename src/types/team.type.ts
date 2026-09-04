export interface TeamData {
  tabs: string[];
  allAvailableSeasons: unknown[];
  details: Details;
  seostr: string;
  QAData: QADatum[];
  table: TableElement[];
  transfers: Transfers;
  overview: Overview;
  stats: TeamDataStats;
  fixtures: Fixtures;
  squad: TeamDataSquad;
  history: History;
}

export interface QADatum {
  question: string;
  answer: string;
}

export interface Details {
  id: number;
  type: string;
  name: ShortNameEnum;
  latestSeason: string;
  shortName: ShortNameEnum;
  country: Country;
  gender: string;
  faqJSONLD: FAQJSONLD;
  sportsTeamJSONLD: SportsTeamJSONLD;
  breadcrumbJSONLD: BreadcrumbJSONLD;
  canSyncCalendar: boolean;
  primaryLeagueId: number;
  primaryLeagueName: PrimaryLeagueNameElement;
  seopath: string;
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

export type Country = "ESP" | "INT";

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

export type ShortNameEnum = "Real Madrid" | "Arsenal" | "CF Villarreal";

export type PrimaryLeagueNameElement =
  | "Club Friendlies"
  | "LaLiga"
  | "Champions League"
  | "Super Cup";

export interface SportsTeamJSONLD {
  "@context": string;
  "@type": string;
  name: ShortNameEnum;
  sport: string;
  gender: string;
  logo: string;
  url: string;
  athlete: unknown[];
  location: Location;
  memberOf: MemberOf;
}

export interface Location {
  "@type": string;
  name: string;
  address: Address;
  geo: Geo;
}

export interface Address {
  "@type": string;
  addressCountry: AddressCountry;
  addressLocality: string;
}

export type AddressCountry = "Spain" | "Europe" | "World";

export interface Geo {
  "@type": string;
  latitude: string;
  longitude: string;
}

export interface MemberOf {
  "@type": string;
  name: PrimaryLeagueNameElement;
  url: string;
}

export interface Fixtures {
  allFixtures: AllFixtures;
  primaryTournamentId: number;
  previousFixturesUrl: string;
  hasOngoingMatch: boolean;
}

export interface AllFixtures {
  fixtures: OverviewFixtureElement[];
  nextMatch: AllFixturesNextMatch;
  lastMatch: AllFixturesLastMatch;
}

export interface OverviewFixtureElement {
  id: number;
  pageUrl: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  result?: number;
  notStarted: boolean;
  tournament: Tournament;
  status: OverviewFixtureStatus;
}

export interface OpponentClass {
  id: number;
  name: string;
  score: number;
}

export interface OverviewFixtureStatus {
  utcTime: Date;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  awarded?: boolean;
  scoreStr?: string;
  reason?: ReasonClass;
  ongoing?: boolean;
  liveTime?: LiveTime;
  matchDateTbd?: boolean;
  matchTimeTbd?: boolean;
}

export interface LiveTime {
  short: string;
  shortKey: string;
  long: string;
  longKey: string;
  maxTime: number;
  basePeriod: number;
  addedTime: number;
}

export interface ReasonClass {
  short: Short;
  shortKey: ShortKey;
  long: Long;
  longKey: LongKey;
}

export type Long = "Full-Time" | "10:51";

export type LongKey = "finished" | "";

export type Short = "FT" | "11\u200e’\u200e";

export type ShortKey = "fulltime_short" | "";

export interface Tournament {
  name: PrimaryLeagueNameElement;
  stage: string;
  leagueId: number;
}

export interface AllFixturesLastMatch {
  id: number;
  pageUrl: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  result: number;
  notStarted: boolean;
  tournament: Tournament;
  status: LastMatchStatus;
}

export interface LastMatchStatus {
  utcTime: Date;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  awarded: boolean;
  scoreStr: string;
  reason: ReasonClass;
}

export interface AllFixturesNextMatch {
  id: number;
  pageUrl: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  notStarted: boolean;
  tournament: Tournament;
  status: NextMatchStatus;
}

export interface NextMatchStatus {
  utcTime: Date;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  ongoing: boolean;
  scoreStr: string;
  liveTime: LiveTime;
}

export interface History {
  trophyList: TrophyList[];
  historicalTableData: HistoricalTableData;
  teamColorMap: TeamColorMap;
  tables: Tables;
  coachHistory: CoachHistory[];
  teamColors: HistoryTeamColors;
}

export interface CoachHistory {
  id: number;
  name: string;
  season: string;
  leagueId: number;
  leagueName: PrimaryLeagueNameElement;
  win: number;
  draw: number;
  loss: number;
  pointsPerGame: number;
  winPercentage: number;
}

export interface HistoricalTableData {
  divisions: Division[];
  ranks: Rank[];
  isValid: boolean;
}

export interface Division {
  divisionRank: number;
  name: PrimaryLeagueNameElement;
  templateId: number;
}

export interface Rank {
  stageId: number;
  tournamentName: PrimaryLeagueNameElement;
  tournamentId: number;
  templateId: number;
  seasonName: string;
  position: number;
  numberOfTeams: number;
  stats: RankStats;
  tableLink: string;
  isConsecutive: boolean;
}

export interface RankStats {
  points: number;
  wins: number;
  draws: number;
  loss: number;
}

export interface Tables {
  current: Current[];
  historic: Current[];
}

export interface Current {
  link: Link[];
}

export interface Link {
  _: string;
  name: PrimaryLeagueNameElement[];
  ccode: Country[];
  season: string[];
  stage_id: string[];
  tournament_id: string[];
  template_id: string[];
  league_id: string[];
}

export interface TeamColorMap {
  color: string;
  colorAlternate: string;
  colorAway: string;
  colorAwayAlternate: string;
}

export interface HistoryTeamColors {
  darkMode: string;
  lightMode: string;
  fontDarkMode: FontMode;
  fontLightMode: FontMode;
}

export type FontMode = "rgba(29, 29, 29, 1.0)" | "rgba(255, 255, 255, 1.0)";

export interface TrophyList {
  name: string[];
  tournamentTemplateId: string[];
  area: AddressCountry[];
  ccode: Country[];
  won: string[];
  runnerup: string[];
  season_won: string[];
  season_runnerup: string[];
}

export interface Overview {
  season: string;
  selectedSeason: string;
  table: TableElement[];
  topPlayers: TopPlayers;
  venue: Venue;
  coachHistory: CoachHistory[];
  overviewFixtures: OverviewFixtureElement[];
  nextMatch: OverviewNextMatch;
  lastMatch: AllFixturesLastMatch;
  teamForm: OverviewTeamForm[];
  hasOngoingMatch: boolean;
  previousFixturesUrl: string;
  teamColors: HistoryTeamColors;
  lastLineupStats: LastLineupStats;
  newsSummary: NewsSummary;
  featuredArticle: null;
  fixtureDifficulty: FixtureDifficulty;
  squad: SquadElement[];
  transfers: Transfers;
}

export interface FixtureDifficulty {
  leagueId: number;
  leagueName: PrimaryLeagueNameElement;
  subheader: string;
  subheaderKey: string;
  difficulty: string;
  difficultyKey: string;
  matchesLeft: number;
  difficultyMatches: number;
  fixtures: FixtureDifficultyFixture[];
}

export interface FixtureDifficultyFixture {
  matchId: number;
  opponentId: number;
  opponentName: string;
  opponentShortName: string;
  isHome: boolean;
  difficulty: number;
  matchDateUtc: Date;
}

export interface LastLineupStats {
  id: number;
  name: ShortNameEnum;
  rating: number;
  formation: string;
  starters: Starter[];
  coach: Coach;
  subs: Sub[];
  unavailable: Sub[];
  averageStarterAge: number;
  totalStarterMarketValue: number;
  lastMatch: LastLineupStatsLastMatch;
}

export interface Coach {
  id: number;
  age: number;
  name: string;
  countryName: string;
  countryCode: Code;
}

export type Code =
  | "BRA"
  | "ENG"
  | "TUR"
  | "FRA"
  | "ESP"
  | "BEL"
  | "NED"
  | "POR"
  | "CIV"
  | "UKR"
  | "GER"
  | "URU"
  | "MAR";

export interface LastLineupStatsLastMatch {
  matchId: number;
  homeTeamId: number;
  homeTeamName: ShortNameEnum;
  awayTeamId: number;
  awayTeamName: string;
}

export interface Starter {
  id: number;
  age: number;
  name: string;
  positionId: number;
  usualPlayingPositionId: number;
  shirtNumber: string;
  countryName: string;
  countryCode: Code;
  horizontalLayout: AlLayout;
  verticalLayout: AlLayout;
  marketValue: number;
  performance: Performance;
  isCaptain?: boolean;
}

export interface AlLayout {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface Performance {
  rating?: number;
  seasonRating?: number;
  events?: Event[];
  seasonAssists?: number;
  substitutionEvents?: SubstitutionEvent[];
  seasonGoals?: number;
  playerOfTheMatch?: boolean;
}

export interface Event {
  type: string;
}

export interface SubstitutionEvent {
  time: number;
  type: string;
  reason: string;
}

export interface Sub {
  id: number;
  age: number;
  name: string;
  usualPlayingPositionId: number;
  shirtNumber: string;
  countryName: string;
  countryCode: Code;
  marketValue?: number;
  performance?: Performance;
  positionId?: number;
  unavailability?: Unavailability;
}

export interface Unavailability {
  injuryId: number;
  type: string;
  expectedReturn: string;
}

export interface NewsSummary {
  items: Item[];
}

export interface Item {
  summary: string;
  source: Source;
}

export interface Source {
  sourceName: string;
  uri: string;
  articleId: string;
  title: string;
}

export interface OverviewNextMatch {
  id: number;
  pageUrl: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  notStarted: boolean;
  tournament: Tournament;
  status: NextMatchStatus;
  odds: null;
  liveTime: ReasonClass;
  startDay: string;
  stats: NextMatchStats;
}

export interface NextMatchStats {
  stats: StatElement[];
  leagueIds: number[];
  leagueNames: PrimaryLeagueNameElement[];
  teamColors: StatsTeamColors;
}

export interface StatElement {
  title: string;
  localizedTitle: string;
  stats: number[];
  highlighted: string;
  type: string;
  decimals?: number;
}

export interface StatsTeamColors {
  darkMode: Mode;
  lightMode: Mode;
  fontDarkMode: Mode;
  fontLightMode: Mode;
}

export interface Mode {
  home: string;
  away: string;
}

export interface SquadElement {
  title: string;
  members: Member[];
}

export interface Member {
  id: number;
  height: number | null;
  age: number;
  dateOfBirth: Date;
  name: string;
  ccode: Code;
  cname: string;
  role: Role;
  excludeFromRanking: boolean;
  shirtNumber?: number;
  positionId?: number;
  injury?: Injury | null;
  rating?: number | null;
  goals?: number;
  penalties?: number;
  assists?: number;
  rcards?: number;
  ycards?: number;
  positionIds?: string;
  positionIdsDesc?: string;
  transferValue?: number | null;
  injured?: boolean;
}

export interface Injury {
  id: string;
  expectedReturn: string;
}

export interface Role {
  key: Key;
  fallback: Fallback;
}

export type Fallback =
  | "Coach"
  | "Keeper"
  | "Defender"
  | "Midfielder"
  | "Attacker";

export type Key =
  | "coach"
  | "keeper_long"
  | "defender_long"
  | "midfielder_long"
  | "attacker_long";

export interface TableElement {
  data: TableData;
  tableFilterTypes: string[];
  teamForm: { [key: string]: TableTeamForm[] } | null;
  nextOpponent: { [key: string]: Array<NextOpponent | string> };
  tableHeader: TableHeader;
}

export interface TableData {
  ccode: Country;
  leagueId: number;
  pageUrl: string;
  leagueName: PrimaryLeagueNameElement;
  legend: Legend[];
  ongoing: Ongoing[];
  table: DataTable;
  tableFilterTypes: string[];
  composite: boolean;
}

export interface Legend {
  title: string;
  tKey: string;
  color: Color;
  indices: number[];
}

export type Color = "#2AD572" | "#0046A7" | "#02CCF0" | "#FF4646" | "#0294F0";

export interface Ongoing {
  id: number;
  hTeam: HTeam;
  aTeam: ShortNameEnum;
  hScore: number;
  aScore: number;
  hId: number;
  aId: number;
  stage: string;
  time: Time;
  status: StatusEnum;
  sId: number;
  gs: Gs;
  extId: EXTID;
}

export type EXTID = "ls_0";

export type Gs = "04.09.2026 21:02:10";

export type HTeam = "Real Betis";

export type StatusEnum = "S";

export type Time = "04.09.2026 21:00";

export interface DataTable {
  all: All[];
  home: All[];
  away: All[];
  form?: All[];
  xg?: Xg[];
}

export interface All {
  name: string;
  shortName: string;
  id: number;
  pageUrl: string;
  featuredInMatch: boolean;
  deduction?: null;
  ongoing?: Ongoing | null;
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
}

export interface Xg {
  name: string;
  shortName: string;
  id: number;
  pageUrl: string;
  featuredInMatch: boolean;
  ongoing?: Ongoing;
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

export interface TableTeamForm {
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

export interface OverviewTeamForm {
  result: number;
  resultString: ResultString;
  imageUrl: string;
  linkToMatch: string;
  date: DateClass;
  teamPageUrl: string;
  tooltipText: TooltipText;
  score: string;
  tournamentName: PrimaryLeagueNameElement;
  home: TeamFormAway;
  away: TeamFormAway;
}

export interface TeamFormAway {
  id: number;
  name: string;
  isOurTeam: boolean;
}

export interface DateClass {
  utcTime: Date;
}

export interface TopPlayers {
  byRating: By;
  byGoals: By;
  byAssists: By;
  seeAllUrl: string;
}

export interface By {
  players: Participant[];
  seeAllLink: string;
}

export interface Participant {
  id: number;
  name: string;
  rank: number;
  ccode: Code;
  teamId: number;
  teamName?: ShortNameEnum;
  value: number;
  stat: ParticipantStat;
  teamColors?: HistoryTeamColors;
}

export interface ParticipantStat {
  name: string;
  value: number;
  format: Format;
  fractions: number;
}

export type Format = "number" | "fraction" | "percent";

export interface Transfers {
  type: string;
  data: TransfersData;
  allTransfers: AllTransfer[];
  allRumours: AllRumour[];
  maxFee: number;
  ourTeamId: number;
}

export interface AllRumour {
  name: string;
  playerId: number;
  position: Position;
  transferDate: Date;
  transferText: null[];
  fromClub: ShortNameEnum;
  fromClubFullName: ShortNameEnum;
  fromClubId: number;
  toClub: string;
  toClubFullName: string;
  toClubId: number;
  fee: AllRumourFee | null;
  amountEuroEstimated: null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: null;
  toDate: null;
  marketValue: number;
  probability: Probability;
  rumourId: number;
  sourceName: string;
  sourceUrl: string;
}

export interface AllRumourFee {
  feeText: FeeText;
  localizedFeeText: LocalizedFeeText;
  value?: number;
}

export type FeeText =
  | "on loan"
  | "fee"
  | "contract extension"
  | "free transfer";

export type LocalizedFeeText =
  | "on_loan"
  | "transfer_fee"
  | "contract_extension"
  | "transfer_type_free_transfer";

export interface Position {
  label: string;
  key: string;
}

export type Probability = "Low";

export interface TransferType {
  text: Text;
  localizationKey: LocalizationKey;
}

export type LocalizationKey = "on_loan" | "contract";

export type Text = "on loan" | "contract";

export interface AllTransfer {
  name: string;
  playerId: number;
  position: Position | null;
  transferDate: Date;
  transferText: Array<number | null | string>;
  fromClub: string;
  fromClubFullName: string;
  fromClubId: number;
  toClub: string;
  toClubFullName: string;
  toClubId: number;
  fee: AllRumourFee | null;
  amountEuroEstimated: null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: Date;
  toDate: Date | null;
  marketValue: number | null;
}

export interface TransfersData {
  "Players in": Players[];
  "Players out": Players[];
  "Contract extension": ContractExtension[];
}

export interface ContractExtension {
  name: string;
  playerId: number;
  position: Position;
  transferDate: Date;
  transferText: Array<ShortNameEnum | number | null>;
  fromClub: ShortNameEnum;
  fromClubFullName: ShortNameEnum;
  fromClubId: number;
  toClub: ShortNameEnum;
  toClubFullName: ShortNameEnum;
  toClubId: number;
  fee: ContractExtensionFee;
  amountEuroEstimated: null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: Date;
  toDate: Date;
  marketValue: number;
}

export interface ContractExtensionFee {
  feeText: FeeText;
  localizedFeeText: LocalizedFeeText;
}

export interface Players {
  name: string;
  playerId: number;
  position: Position | null;
  transferDate: Date;
  transferText: Array<number | string>;
  fromClub: string;
  fromClubFullName: string;
  fromClubId: number;
  toClub: string;
  toClubFullName: string;
  toClubId: number;
  fee: AllRumourFee | null;
  amountEuroEstimated: null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: Date;
  toDate: Date | null;
  marketValue: number | null;
}

export interface Venue {
  widget: Widget;
  statPairs: Array<Array<number | string>>;
}

export interface Widget {
  name: string;
  location: string[];
  city: string;
}

export interface TeamDataSquad {
  squad: SquadElement[];
  isNationalTeam: boolean;
}

export interface TeamDataStats {
  teamId: string;
  primaryLeagueId: number;
  primarySeasonId: string;
  players: Player[];
  teams: Team[];
  tournamentId: string;
  tournamentSeasons: TournamentSeason[];
}

export interface Player {
  header: string;
  participant: Participant;
  fetchAllUrl: string;
  topThree: Participant[];
  order: number;
  name: string;
  localizedTitleId: string;
  category: Category;
}

export type Category =
  | "Top Stat"
  | "Attacking"
  | "Defending"
  | "Goalkeeping"
  | "Discipline";

export interface Team {
  header: string;
  localizedTitleId: string;
  participant: Participant;
  fetchAllUrl: string;
  topThree: Participant[];
  order: number;
  stat: string;
  category: Category;
}

export interface TournamentSeason {
  name: string;
  season: string;
  leagueName: string;
  tournamentId: string;
  parentLeagueId: string;
}
