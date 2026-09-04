import type {
  NextOpponent,
  TableClass,
  TableData,
  TeamForm,
} from "../types/table.types";

export class Table {
  private tableId;
  private leagueName;
  private table;
  private teamForm;
  private nextOpponent;

  constructor(tableData: TableData) {
    this.tableId = String(tableData.data.leagueId);
    this.leagueName = tableData.data.leagueName;
    this.table = tableData.data.table;
    this.teamForm = tableData.teamForm;
    this.nextOpponent = tableData.nextOpponent;
  }

  public get _tableId(): string {
    return this.tableId;
  }

  public get _leagueName(): string {
    return this.leagueName;
  }

  public get _table(): TableClass {
    return this.table;
  }

  public get _teamForm(): { [key: string]: TeamForm[] } {
    return this.teamForm;
  }

  public get _nextOpponent(): { [key: string]: Array<NextOpponent | string> } {
    return this.nextOpponent;
  }
}
