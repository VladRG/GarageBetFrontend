import { Component, OnInit } from '@angular/core';
import { BetService } from '@app/core';

@Component({
  selector: 'app-bet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BetListComponent implements OnInit {

  constructor(private service: BetService) { }

  ngOnInit() {
    this.service.get().subscribe();
  }

}
