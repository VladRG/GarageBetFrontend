import { TestBed, inject } from '@angular/core/testing';

import { ChampionshipService } from './championship.service';

describe('ChampionshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionshipService]
    });
  });

  it('should be created', inject([ChampionshipService], (service: ChampionshipService) => {
    expect(service).toBeTruthy();
  }));
});
