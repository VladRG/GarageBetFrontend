import { Injectable } from '@angular/core';

@Injectable()
export class AppLayoutService {
  contentResize(event) {
    console.log(event);
  }
}
