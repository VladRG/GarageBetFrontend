import { BaseEntity } from "./BaseEntity";
import { Championship } from "./Championship";

export class Team extends BaseEntity {
  name: string;
  country: string;
  championships: Array<Championship> = [];
}
