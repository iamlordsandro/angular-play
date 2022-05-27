import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  title = 'contact-page-component';
  pageTitle = 'Contact';

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'Contact';
  }

}
