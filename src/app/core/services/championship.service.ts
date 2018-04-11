import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Championship } from '@app/models';
import { BaseService } from './base.service';

@Injectable()
export class ChampionshipService extends BaseService<Championship> {

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
