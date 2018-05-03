import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { MatchModel } from '@app/models';

@Injectable()
export class MatchService extends BaseService<MatchModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'match';
  }
}
