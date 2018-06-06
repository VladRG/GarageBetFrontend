import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  submit(paypalDonationForm) {
    paypalDonationForm.submit();
  }
}
