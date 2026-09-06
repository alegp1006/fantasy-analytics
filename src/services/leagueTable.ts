import { URL } from "../constants/url";

export async function leagueTable() {
  try {
    const url = URL.leagueTable;
    if (!url) throw new Error("url is missing");

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error to get data" + response.status);

    const tableData = await response.json();
    if (!tableData) throw new Error("error no table data return from api");

    return tableData;
  } catch (err) {
    throw new Error("Error to fetch table data: ", { cause: err });
  }
}
