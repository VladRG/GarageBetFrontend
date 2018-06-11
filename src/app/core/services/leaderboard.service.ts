import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStats, UserStatsResponse, Leaderboard, LeaderboardInvite } from '@app/models';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaderboardService extends BaseService<Leaderboard> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getStats(): Observable<UserStats> {
    return this.httpClient.get<UserStats>('stats');
  }

  getLeaderboard(page: number, pageSize: number, championshipId?: number): Observable<UserStatsResponse> {
    return this.httpClient.get<UserStatsResponse>
      (`leaderboard?page=${page}&pageSize=${pageSize}${championshipId ? '&championshipId=' + championshipId : ''}`);
  }

  getLeaderboardForGroup(page: number, pageSize: number, group: number): Observable<UserStatsResponse> {
    return this.httpClient.get<UserStatsResponse>
      (`leaderboard?page=${page}&pageSize=${pageSize}&group=${group}`);
  }

  getPendingInvites(): Observable<Array<LeaderboardInvite>> {
    return this.httpClient.get<Array<LeaderboardInvite>>('leaderboard/invites');
  }

  acceptInvite(group: number) {
    return this.httpClient.put(`leaderboard/invite/${group}`, { accept: true });
  }

  rejectInvite(group: number) {
    return this.httpClient.put(`leaderboard/invite/${group}`, { accept: false });
  }
}
