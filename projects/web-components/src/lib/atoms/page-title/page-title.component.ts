import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  title: string = 'page-title-component';
  @Input() pageTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'page-title-component';
  }

}
