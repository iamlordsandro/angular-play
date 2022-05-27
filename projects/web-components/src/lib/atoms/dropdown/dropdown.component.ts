import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

 
  title: string = 'dropdown-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'dropdown-component';
  }
}
