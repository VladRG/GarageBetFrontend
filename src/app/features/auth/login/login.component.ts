import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '@app/core';
import { Credentials } from '@app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { HasLoadingSpinnerBase } from '@app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends HasLoadingSpinnerBase implements OnInit {

  credentials: Credentials;
  errorMessage = '';
  redirect = 'match/today';

  constructor(
    private authService: AppAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.credentials = new Credentials();
    this.route.queryParams.subscribe(params => {
      if (params.redirect) {
        this.redirect = params.redirect;
      }
    });
  }

  ngOnInit() {

  }

  onCancel() {
    this.router.navigateByUrl('');
  }

  onLogin() {
    this.wrapObservableWithSpinner(this.authService.login(this.credentials))
      .subscribe(() => {
        this.router.navigateByUrl(this.redirect);
      }, () => {
        this.errorMessage = 'Invalid email or password.'
      });
  }
}
