import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChampionshipModel } from '@app/models';
import { BaseService } from './base.service';

@Injectable()
export class ChampionshipService extends BaseService<ChampionshipModel> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'championship';
  }

  // Specific
  addTeamToChampionship(teamId: number, championshipId: number): Observable<any> {
    return this.httpClient.put(`${this.getResourceUrl(championshipId)}/team`, teamId);
  }

  removeTeamFromChampionship(teamId: number, championshipId: number): Observable<any> {
    return this.httpClient.delete(`${this.getResourceUrl(championshipId)}/${teamId}`);
  }
}
