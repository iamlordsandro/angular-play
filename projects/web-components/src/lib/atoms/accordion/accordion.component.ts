import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  title: string = 'accordion-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'accordion-component';
  }

}
