import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { BetModel, MatchBetModel, UserStats, UserStatsResponse } from '@app/models';
import { Observable } from 'rxjs';

@Injectable()
export class BetService extends BaseService<BetModel> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'bet';
  }

  getAvailable(): Observable<Array<MatchBetModel>> {
    return this.httpClient.get<Array<MatchBetModel>>(`${this.baseUrl}`);
  }

  getStats(): Observable<UserStats> {
    return this.httpClient.get<UserStats>('stats');
  }

  getLeaderboard(page: number, pageSize: number, championshipId?: number): Observable<UserStatsResponse> {
    return this.httpClient.get<UserStatsResponse>(`leaderboard?page=${page}&pageSize=${pageSize}${championshipId ? '&championshipId=' + championshipId : ''}`);
  }
}
