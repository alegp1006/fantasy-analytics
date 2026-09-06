import { URL } from "../constants/url";
import { insertParamString } from "../utils/insertParamString";

export async function team(id: string) {
  const url = insertParamString({
    text: URL.team,
    value: id,
    indexStart: 0,
    indexEnd: -14,
  });
  try {
    const response = await fetch(url);
    if (!response.status)
      throw new Error("Error to get team" + response.status);
    const teamData = await response.json();
    if (!teamData) throw new Error("error no team data return from api");
    return teamData;
  } catch (err) {
    throw new Error("Error to fetch team data: ", { cause: err });
  }
}
