import { URL } from "../constants/url";

export async function searchPlayer(name: string) {
  try {
    const res = await fetch(`${URL.playerNameSuggestion}${name}`);
    if (!res.ok) {
      throw new Error("error to get player" + res.status);
    }
    const player = await res.json();
    if (!player) throw new Error("error no player data return from api");

    return player;
  } catch (err) {
    throw new Error(`Error to fetch player: `, { cause: err });
  }
}
