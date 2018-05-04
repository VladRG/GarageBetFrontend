import { NgModule } from '@angular/core';
import { AppAuthService } from './auth/auth.service';
import { AppAuthGuard } from './auth/auth.guard';
import { ApiUrlInterceptor } from './api-url.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChampionshipService, TeamService, MatchService, AppLayoutService } from './services';

@NgModule({
  declarations: [],
  providers: [
    AppAuthService,
    AppAuthGuard,
    AppLayoutService,
    ChampionshipService,
    TeamService,
    MatchService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true }
  ],
  exports: []
})
export class AppCoreModule { }
