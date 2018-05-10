import { TeamModel } from './Team';
import { BaseEntity } from './BaseEntity';
import { Match } from './Match';

export class Championship extends BaseEntity {
  name: string;
  competitiveYear: string;
}

export class ChampionshipModel extends Championship {
  teams: Array<TeamModel> = [];
  matches: Array<Match> = [];
}
