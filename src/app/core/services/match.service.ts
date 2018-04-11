import { Injectable } from "@angular/core";
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
import { Match } from "@app/models";

@Injectable()
export class MatchService extends BaseService<Match> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'match';
  }
}
