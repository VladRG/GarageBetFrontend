import { BaseEntity } from "@app/models/BaseEntity";

export class Bet extends BaseEntity {
  userId: number;
  matchId: number;
  homeTeamId: number;
  awayTeamId: number;
}
