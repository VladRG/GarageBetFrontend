import { BaseEntity } from './BaseEntity';
import { ChampionshipModel } from './Championship';
import { TeamModel } from './Team';
import { BetState, BetModel, UserModel } from '@app/models';

export class Match extends BaseEntity {
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number;
  awayScore: number;
  dateTime: Date;
  championshipId: number;
  standing: string;
}

export class MatchModel {
  id: number;
  awayScore: number;
  homeScore: number;
  homeTeam: TeamModel;
  awayTeam: TeamModel;
  dateTime: Date;
}

export class MatchBetModel extends Match {
  championship: ChampionshipModel;
  match: MatchModel;
  bet: BetModel;
  betState: BetState;
}

export class MatchStats {
  user: UserModel;
  homeScore: number;
  awayScore: number;
  betState: BetState;
}
