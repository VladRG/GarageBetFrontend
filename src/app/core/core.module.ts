import { NgModule } from '@angular/core';
import { AppAuthGuard } from './guards';
import { ApiUrlInterceptor, TokenInterceptor } from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChampionshipService, TeamService, MatchService, AppLayoutService, AppAuthService } from './services';

@NgModule({
  declarations: [],
  providers: [
    AppAuthService,
    AppAuthGuard,
    AppLayoutService,
    ChampionshipService,
    TeamService,
    MatchService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  exports: []
})
export class AppCoreModule { }
