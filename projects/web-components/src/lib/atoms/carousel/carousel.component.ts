import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  
  title: string = 'carousel-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'carousel-component';
  }

}
