import { Injectable } from '@angular/core';

@Injectable()
export class AppLayoutService {
  constructor() {
    this.setLayoutStyle(window.innerWidth);
  }

  layoutType: AppLayoutStyle = AppLayoutStyle.DESKTOP;

  onContentResize(width: number): void {
    this.setLayoutStyle(width);
  }

  private setLayoutStyle(width: number): void {
    if (width > 1200) {
      this.layoutType = AppLayoutStyle.DESKTOP;
    } else if (width > 760) {
      this.layoutType = AppLayoutStyle.TABLET;
    } else {
      this.layoutType = AppLayoutStyle.PHONE;
    }
  }
}

export enum AppLayoutStyle {
  PHONE = 'phone',
  TABLET = 'tablet',
  DESKTOP = 'desktop'
}
