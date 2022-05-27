import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  title: string = 'navigation-bar-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'navigation-bar-component';
  }

}
