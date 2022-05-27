import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  title: string = 'alert-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'alert-component';
  }
}
