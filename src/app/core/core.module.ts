import { NgModule } from "@angular/core";
import { AppAuthService } from "./auth/auth.service";
import { AppAuthGuard } from "./auth/auth.guard";

@NgModule({
  providers: [
    AppAuthService,
    AppAuthGuard
  ],
})
export class AppCoreModule { }
