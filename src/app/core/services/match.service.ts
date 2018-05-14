import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { MatchModel, MatchBetModel, MatchStats, BetState } from '@app/models';
import { Observable } from 'rxjs';

@Injectable()
export class MatchService extends BaseService<MatchModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'match';
  }

  getMatchBets(): Observable<Array<MatchBetModel>> {
    return this.httpClient.get<Array<MatchBetModel>>(`${this.baseUrl}`);
  }

  getStats(id: number): Observable<Array<MatchStats>> {
    return this.httpClient.get<Array<MatchStats>>(`match/stats/${id}`);
  }

  checkBetState(betState: BetState): string {
    switch (betState) {
      case BetState.CanBet:
        return 'match-card-can-bet';
      case BetState.NotAvailable:
        return 'match-card-not-available';
      case BetState.Won:
        return 'match-card-won';
      case BetState.Result:
        return 'match-card-result';
      case BetState.Lost:
        return 'match-card-lost';
      default:
        return '';
    }
  }
}
