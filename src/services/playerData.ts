import { URL } from "../constants/url";

export async function playerData(id: string) {
  try {
    const response = await fetch(`${URL.playerData}${id}`);
    if (!response.ok) throw new Error("Error to get data" + response.status);
    const playerData = await response.json();
    if (!playerData) throw new Error("error no player data return from api");

    return playerData;
  } catch (err) {
    throw new Error("Error to fetch player data: ", { cause: err });
  }
}
