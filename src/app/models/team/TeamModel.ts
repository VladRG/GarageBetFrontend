import { Championship } from '@app/models/championship';
import { Team } from '@app/models/team/Team';

export class TeamModel extends Team {
  championships: Array<Championship>;
}
