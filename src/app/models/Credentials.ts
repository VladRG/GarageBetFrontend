export class Credentials {
  email: string;
  password: string;
}

export class RegisterModel {
  email: string;
  password: string;
  confirmPassword: string;
  confirm: string;
  firstName: string;
  lastName: string;
}

export class UserModel {
  firstName: string;
  lastName: string;
  email: string;
}

export class UserStats {
  won: number;
  result: number;
  lost: number;
  count: number;
  user: UserModel;
}

export class UserStatsResponse {
  stats: Array<UserStats>;
  count: number;
  position: number;
}
