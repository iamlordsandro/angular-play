import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  title = 'not-found-page-component';
  pageTitle = 'Sandro.ME';

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'Not Found';
  }

}
