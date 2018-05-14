import { BaseEntity } from './BaseEntity';
import { MatchModel } from './Match';
import { TeamModel } from './Team';

export class Bet extends BaseEntity {
  userId: number;
  matchId: number;
  homeTeamId: number;
  awayTeamId: number;
}

export class BetModel extends Bet {
  homeScore: number;
  awayScore: number;
}

export enum BetState {
  CanBet = 0,
  Won = 1,
  Lost = 2,
  Result = 3,
  NotAvailable = 4,
  BetSet = 5
}
