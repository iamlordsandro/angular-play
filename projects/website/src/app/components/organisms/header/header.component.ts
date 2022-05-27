import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'header-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'header-component';
  }

}
