import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  title: string = 'icon-component';
  @Input() class: string = '';
  @Input() size?: string = '1rem';

  constructor() { }

  ngOnInit(): void {
    this.title = 'icon-component';
    this.class = 'bi ' + this.class;
  }

}
