import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { MatchModel, MatchBetModel, MatchStats, BetState, MatchBetForm } from '@app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLocalDateTimeFromUtc } from '@app/utils';

@Injectable()
export class MatchService extends BaseService<MatchModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'match';
  }

  getMatchBets(): Observable<Array<MatchBetModel>> {
    return this.httpClient.get<Array<MatchBetModel>>(`${this.baseUrl}`).pipe(
      map(this.mapDates)
    );
  }

  getMatchBetsForChampionship(championshipId: number): Observable<Array<MatchBetModel>> {
    return this.httpClient.get<Array<MatchBetModel>>(`${this.baseUrl}/championship/${championshipId}`)
      .pipe(map(this.mapDates));
  }

  getTodaysMatches(): Observable<Array<MatchBetModel>> {
    return this.httpClient.get<Array<MatchBetModel>>(`${this.baseUrl}/today`)
      .pipe(map(this.mapDates));
  }

  getStats(id: number): Observable<Array<MatchStats>> {
    return this.httpClient.get<Array<MatchStats>>(`match/stats/${id}`);
  }

  findMatchForBet(betId: number): Observable<MatchModel> {
    return this.httpClient.get<MatchModel>(`match/bet/${betId}`);
  }

  getModelForNewBet(id: number): Observable<MatchBetForm> {
    return this.httpClient.get<MatchBetForm>(`match/new-bet/${id}`);
  }

  getModelForEditBet(id: number): Observable<MatchBetForm> {
    return this.httpClient.get<MatchBetForm>(`match/edit-bet/${id}`);
  }

  checkBetState(matchBet: MatchBetModel): string {
    if (matchBet.betState === BetState.CanBet || matchBet.homeScore < 0) {
      return 'match-card-can-bet';
    }

    switch (matchBet.betState) {
      case BetState.NotAvailable:
        return 'match-card-not-available';
      case BetState.Won:
        return 'match-card-won';
      case BetState.Result:
        return 'match-card-result';
      case BetState.Lost:
        return 'match-card-lost';
    }
  }

  checkBet(betState: BetState) {
    switch (betState) {
      case BetState.Won:
        return 'match-card-won';
      case BetState.Result:
        return 'match-card-result';
      case BetState.Lost:
        return 'match-card-lost';
      default:
        return 'match-card-not-available';
    }
  }

  private mapDates(models: Array<MatchBetModel>): Array<MatchBetModel> {
    models.forEach(element => {
      element.dateTime = new Date(element.dateTime);
      element.dateTime = getLocalDateTimeFromUtc(element.dateTime);
    });
    return models;
  }
}
