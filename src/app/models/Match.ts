import { BaseEntity } from "./BaseEntity";

export class Match extends BaseEntity {
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number;
  awayScore: number;
  dateTime: Date;
  championshipId: number;
  standing: string;
}
