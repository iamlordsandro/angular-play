import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  title: string = 'under-construction-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'under-construction-component';
  }

}
