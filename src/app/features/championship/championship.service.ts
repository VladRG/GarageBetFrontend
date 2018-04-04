import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Championship } from '../../models';

@Injectable()
export class ChampionshipService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'championship';

  // CRUD
  get(): Observable<Array<Championship>> {
    return this.httpClient.get<Array<Championship>>(this.baseUrl);
  }

  find(id: number): Observable<Championship> {
    return this.httpClient.get<Championship>(this.getResourceUrl(id));
  }

  add(championship: Championship): Observable<any> {
    return this.httpClient.post(this.baseUrl, championship);
  }

  update(championship: Championship): Observable<any> {
    return this.httpClient.put(this.getResourceUrl(championship.id), championship);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.getResourceUrl(id))
  }

  // Specific
  addTeamToChampionship(teamId: number, championshipId: number): Observable<any> {
    return this.httpClient.put(`${this.getResourceUrl(championshipId)}/team`, teamId);
  }

  removeTeamFromChampionship(teamId: number, championshipId: number): Observable<any> {
    return this.httpClient.delete(`${this.getResourceUrl(championshipId)}/${teamId}`);
  }

  private getResourceUrl(id: number | string): string {
    return `${this.baseUrl}/${id}`;
  }
}
