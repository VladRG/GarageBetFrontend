import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppLayoutService } from '@app/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class AppLayoutComponent {

  constructor(public service: AppLayoutService) { }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(event: number) {
    this.service.setType(event);
  }
}
