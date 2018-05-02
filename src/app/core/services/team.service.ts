import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Team, TeamModel } from '@app/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamService extends BaseService<Team> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'team';
  }

  getForChampionship(id: number): Observable<Array<Team>> {
    return this.httpClient.get<Array<Team>>(`${this.baseUrl}/championship/${id}`);
  }

  getForSelect(): Observable<Array<TeamModel>>{
    return this.httpClient.get<Array<TeamModel>>(`${this.baseUrl}/model`);
  }
}
