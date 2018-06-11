import { NgModule } from '@angular/core';
import { AppAuthGuard } from './guards';
import { ApiUrlInterceptor, TokenInterceptor } from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  ChampionshipService, TeamService, MatchService,
  AppLayoutService, AppAuthService, BetService, LeaderboardService
} from './services';
import { AppLoggedInGuard } from '@app/core/guards/logged-in.guard';

@NgModule({
  declarations: [],
  providers: [
    AppAuthGuard,
    AppLoggedInGuard,
    AppAuthService,
    AppLayoutService,
    ChampionshipService,
    LeaderboardService,
    TeamService,
    BetService,
    MatchService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  exports: []
})
export class AppCoreModule { }
