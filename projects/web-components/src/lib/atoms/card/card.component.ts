import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title: string = 'card-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'card-component';
  }

}
