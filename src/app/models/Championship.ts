import { Team } from "./Team";
import { BaseEntity } from "./BaseEntity";

export class Championship extends BaseEntity {
  name: string;
  teams: Array<Team> = []
}
