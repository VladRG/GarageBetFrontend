import { Component, OnInit } from '@angular/core';
import { MatchService } from '@app/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchModel } from '@app/models';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndMatchComponent implements OnInit {

  constructor(
    private service: MatchService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => {
      this.service.find(params.id).subscribe((match: MatchModel) => {
        this.match = match;
      });
    });
  }

  match: MatchModel;
  ngOnInit() { }

  onSave() {
    this.service.update(this.match)
      .subscribe(response => {
        this.router.navigateByUrl('match');
      });
  }
}
