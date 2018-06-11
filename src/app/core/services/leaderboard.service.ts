import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStats, UserStatsResponse, Leaderboard, LeaderboardInvite, LeaderboardSummary } from '@app/models';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaderboardService extends BaseService<Leaderboard> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'leaderboard';
  }

  getStats(): Observable<UserStats> {
    return this.httpClient.get<UserStats>('stats');
  }

  getLeaderboard(page: number, pageSize: number, championshipId?: number): Observable<UserStatsResponse> {
    return this.httpClient.get<UserStatsResponse>
      (`${this.baseUrl}?page=${page}&pageSize=${pageSize}${championshipId ? '&championshipId=' + championshipId : ''}`);
  }

  getLeaderboards(): Observable<Array<LeaderboardSummary>> {
    return this.httpClient.get<Array<LeaderboardSummary>>(`${this.baseUrl}/group`);
  }

  getLeaderboardForGroup(page: number, pageSize: number, group: number): Observable<UserStatsResponse> {
    return this.httpClient.get<UserStatsResponse>
      (`${this.baseUrl}?page=${page}&pageSize=${pageSize}&group=${group}`);
  }

  getPendingInvites(): Observable<Array<LeaderboardInvite>> {
    return this.httpClient.get<Array<LeaderboardInvite>>('leaderboard/invites');
  }

  acceptInvite(group: number) {
    return this.httpClient.put(`${this.baseUrl}/invite/${group}`, { accept: true });
  }

  rejectInvite(group: number) {
    return this.httpClient.put(`${this.baseUrl}/invite/${group}`, { accept: false });
  }

  getLeaderboardForEdit(group: number): Observable<Leaderboard> {
    return this.httpClient.get<Leaderboard>(`${this.baseUrl}/edit/${group}`);
  }

  leaveLeaderboard(group: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/leave/${group}`, {});
  }
}
