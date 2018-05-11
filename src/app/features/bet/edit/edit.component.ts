import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BetModel } from '@app/models';
import { BetService } from '@app/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: BetService) {
    this.route.params.subscribe((params) => {
      const betId = parseInt(params.id, 10);
      this.service.find(betId).subscribe((response: BetModel) => {
        this.bet = response;
      });
    });
  }

  bet: BetModel;
  ngOnInit() { }

}
