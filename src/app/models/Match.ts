import { BaseEntity } from './BaseEntity';
import { ChampionshipModel } from './Championship';
import { TeamModel } from './Team';

export class Match extends BaseEntity {
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number;
  awayScore: number;
  dateTime: Date;
  championshipId: number;
  standing: string;
}

export class MatchModel extends Match {
  championship: ChampionshipModel;
  homeTeam: TeamModel;
  awayTeam: TeamModel;
}
