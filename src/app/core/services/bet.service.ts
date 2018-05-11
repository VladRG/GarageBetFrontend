import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { BetModel } from '@app/models';

@Injectable()
export class BetService extends BaseService<BetModel> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'bet';
  }
}
