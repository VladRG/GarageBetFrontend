import { Observable, forkJoin } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export class HasLoadingSpinnerBase {
  constructor() {
    this.isLoading = false;
    this.message = 'Loading...';
  }

  isLoading: boolean;
  message: string;

  public wrapObservableArrayWithSpinner(observables: Array<Observable<any>>): Observable<any> {
    this.startSpinner();
    return forkJoin(observables).pipe(
      finalize(() => {
        this.stopSpinner();
      })
    );
  }

  public wrapObservableWithSpinner(observable: Observable<any>): Observable<any> {
    this.startSpinner();
    return observable.pipe(
      finalize(() => {
        this.stopSpinner();
      })
    );
  }

  public setMessage(message: string) {
    this.message = message;
  }

  private stopSpinner() {
    this.isLoading = false;
  }

  private startSpinner() {
    this.isLoading = true;
  }
}
