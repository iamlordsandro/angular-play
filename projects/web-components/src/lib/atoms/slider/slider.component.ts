import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  title: string = 'slider-component';
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'slider-component';
  }

}
