import { BaseEntity } from './BaseEntity';
import { Championship } from './Championship';

export class Team extends BaseEntity {
  name: string;
  country: string;
}

export class TeamModel extends Team {
  championships: Array<Championship> = [];
}
