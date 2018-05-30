import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppAuthService } from '@app/core/services';

@Injectable()
export class AppLoggedInGuard implements CanActivate {
  constructor(private service: AppAuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
