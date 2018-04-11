import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { BaseEntity } from '@app/models';

export class BaseService<T extends BaseEntity> {
  constructor(private http: HttpClient) { }

  public baseUrl = '';

  // CRUD
  get(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl);
  }

  find(id: number): Observable<T> {
    return this.http.get<T>(this.getResourceUrl(id));
  }

  add(entity: T): Observable<any> {
    return this.http.post(this.baseUrl, entity);
  }

  update(entity: T): Observable<any> {
    return this.http.put(this.getResourceUrl(entity.id), entity);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.getResourceUrl(id))
  }

  protected getResourceUrl(id: number | string): string {
    return `${this.baseUrl}/${id}`;
  }
}
