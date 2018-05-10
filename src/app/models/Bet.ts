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
  homeTeam: TeamModel;
  awayTeam: TeamModel;
  match: MatchModel;
  homeScore: number;
  awayScore: number;
}
