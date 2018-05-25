import { TeamModel } from "@app/models";

export class MatchModel {
  id: number;
  awayScore: number;
  homeScore: number;
  homeTeamName: string;
  awayTeamName: string;
  dateTime: Date;
}
