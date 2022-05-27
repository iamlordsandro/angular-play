import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  title: string = 'button-group-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'button-group-component';
  }

}
