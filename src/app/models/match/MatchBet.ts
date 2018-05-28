import { BetState } from '@app/models/bet';

export class MatchBetModel {
  matchId: number;
  betId: number;
  championshipId: number;
  homeBet: number;
  awayBet: number;
  homeScore: number;
  awayScore: number;
  championshipName: string;
  competitiveYear: string;
  homeTeamName: string;
  awayTeamName: string;
  standing: string;
  dateTime: Date;
  betState: BetState;
}
