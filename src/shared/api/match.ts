import { Match, RequestType } from "@/entities";

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp"; 


export const getMatches = async (): Promise<Match[]> => {
  const response = await fetch(API_URL);
  const data = await response?.json();
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных");
  }
  return await data.data.matches;
};
