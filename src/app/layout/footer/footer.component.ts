import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppLayoutService } from '@app/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(public layout: AppLayoutService) { }

  ngOnInit() {

  }

  submit(paypalDonationForm) {
    paypalDonationForm.submit();
  }
}
