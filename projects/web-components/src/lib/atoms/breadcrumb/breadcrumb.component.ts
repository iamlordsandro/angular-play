import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  title: string = 'breadcrumb-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'breadcrumb-component';
  }
}
