import { BaseEntity } from '@app/models/BaseEntity';
import { UserModel } from '@app/models/Credentials';

export class Leaderboard extends BaseEntity {
  id: number;
  name: string;
  users: Array<UserModel> = [];
}

export class LeaderboardSummary {
  name: string;
  owner: UserModel;
  id: number;
}
