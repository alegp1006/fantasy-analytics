import type {
  FirstSeasonStats,
  InitialMatchesPage,
  MainLeague,
  MarketValues,
  NextMatch,
  PlayerData,
  PrimaryTeam,
  RecentMatch,
  Traits,
} from "../types/player.type";
import type { PlayerNews } from "../types/playerNews.type";
import { CoreError } from "./coreError";

export class Player {
  private id;
  private name;
  private playerImg: string;
  private playerNews: PlayerNews[];
  private primaryTeam;
  private mainLeague;
  private recentMatches;
  private traits;
  private firstSeasonStats;
  private marketValues;
  private nextMatch;
  private initialMatchesPage;

  private status: string | null;

  constructor(playerData: PlayerData) {
    this.id = playerData.id;
    this.name = playerData.name;
    this.playerImg = "";
    this.primaryTeam = playerData.primaryTeam;
    this.mainLeague = playerData.mainLeague;
    this.recentMatches = playerData.recentMatches;
    this.traits = playerData.traits;
    this.firstSeasonStats = playerData.firstSeasonStats;
    this.marketValues = playerData.marketValues;
    this.nextMatch = playerData.nextMatch;
    this.initialMatchesPage = playerData.initialMatchesPage;
    this.playerNews = [];
    this.status = "";
  }

  public get _name(): string {
    return this.name;
  }

  public get _playerNews(): PlayerNews[] {
    return this.playerNews;
  }

  public get _primaryTeam(): PrimaryTeam {
    return this.primaryTeam;
  }

  public get _mainLeague(): MainLeague {
    return this.mainLeague;
  }
  public get _recentMatches(): RecentMatch[] {
    return this.recentMatches;
  }

  public get _traits(): Traits {
    return this.traits;
  }
  public get _firstSeasonStats(): FirstSeasonStats {
    return this.firstSeasonStats;
  }
  public get _marketValues(): MarketValues {
    return this.marketValues;
  }
  public get _nextMatch(): NextMatch {
    return this.nextMatch;
  }

  public get _initialMatchesPage(): InitialMatchesPage {
    return this.initialMatchesPage;
  }

  getPlayerNews(service: (id: string) => PlayerNews[]) {
    try {
      this.status = null;
      service(String(this.id));
      this.status = "ok";
    } catch (error) {
      this.status = "error";
      throw new CoreError("error al cargar las noticias del jugador" + error);
    }
    return this.status;
  }

  getPlayerImage(service: (id: string) => string) {
    try {
      this.status = null;
      const img = service(String(this.id));
      this.playerImg = img;
      this.status = "ok";
    } catch (error) {
      this.status = "error";
      throw new CoreError("error al cargar las noticias del jugador" + error);
    }

    return this.playerImg;
  }
}
