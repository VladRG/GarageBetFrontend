import { UserModel } from '@app/models/Credentials';

export class LeaderboardInvite {
  id: number;
  name: string;
  inviter: UserModel;
}
