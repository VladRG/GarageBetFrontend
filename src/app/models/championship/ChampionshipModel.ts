import { TeamModel } from "@app/models/team";
import { Championship } from "./Championship";
import { Match } from "@app/models/match";

export class ChampionshipModel extends Championship {
  teams: Array<TeamModel> = [];
  matches: Array<Match> = [];
}
