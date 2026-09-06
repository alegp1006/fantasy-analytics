import { URL } from "../constants/url";
import { insertParamString } from "../utils/insertParamString";

export async function playerNews(id: string) {
  try {
    const url = insertParamString({
      text: URL.playerNews,
      value: id,
      indexStart: 0,
      indexEnd: -12,
    });
    if (!url) throw new Error("url is missing");

    const response = await fetch(url);
    if (!response.ok) throw new Error("error to get data");

    const playerNews = response.json();
    if (!playerNews)
      throw new Error("error no player news data return from api");

    return playerNews;
  } catch (err) {
    throw new Error("error to fetch playerNews: ", {
      cause: err,
    });
  }
}
