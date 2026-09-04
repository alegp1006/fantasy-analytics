import type {
  FixtureDifficulty,
  OverviewNextMatch,
  OverviewTeamForm,
  TeamData,
  TeamDataSquad,
  TeamDataStats,
  TopPlayers,
} from "../types/team.type";

export class Team {
  private teamId;
  private teamName;
  private teamCountry;
  private teamPlayers;
  private teamStats;
  private teamTopPlayers;
  private teamForm;
  private teamNextMatch;
  private teamFixtureDifficulty;

  constructor(teamData: TeamData) {
    this.teamId = String(teamData.details.id);
    this.teamName = teamData.details.name;
    this.teamCountry = teamData.details.country;
    this.teamPlayers = teamData.squad;
    this.teamStats = teamData.stats;
    this.teamTopPlayers = teamData.overview.topPlayers;
    this.teamForm = teamData.overview.teamForm;
    this.teamNextMatch = teamData.overview.nextMatch;
    this.teamFixtureDifficulty = teamData.overview.fixtureDifficulty;
  }

  public get _teamId(): string {
    return this.teamId;
  }
  public get _teamName(): string {
    return this.teamName;
  }
  public get _teamCountry(): string {
    return this.teamCountry;
  }
  public get _teamPlayers(): TeamDataSquad {
    return this.teamPlayers;
  }
  public get _teamStats(): TeamDataStats {
    return this.teamStats;
  }
  public get _teamTopPlayers(): TopPlayers {
    return this.teamTopPlayers;
  }
  public get _teamForm(): OverviewTeamForm[] {
    return this.teamForm;
  }
  public get _teamNextMatch(): OverviewNextMatch {
    return this.teamNextMatch;
  }

  public get _teamFixtureDifficulty(): FixtureDifficulty {
    return this.teamFixtureDifficulty;
  }
}
