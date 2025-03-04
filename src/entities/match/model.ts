import { StatusTypes } from '../status/model';

export type Team = {
  name: string;
  players: string[];
  points: number[];
  place: string;
  total_kills: number[];
};

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: StatusTypes;
};

export type RequestWrapper<T> = {
  matches: T
}
export type RequestType<T> = {
  matches: RequestType<Match[]>;
  data: RequestWrapper<T>;
  ok: boolean;
}
