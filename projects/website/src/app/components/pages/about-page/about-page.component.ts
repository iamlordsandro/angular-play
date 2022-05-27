import { Component, OnInit, HostListener } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
@Component({
  selector: 'ws-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [
    fadeInOnEnterAnimation({delay: 2000})
  ]
})

export class AboutPageComponent implements OnInit {

  title = 'about-page-component';
  pageTitle = 'About';
  animationAlreadyDone: boolean = false;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(_event: any) {
    window.onscroll=function(){window.scrollTo(0, 0);};
  }

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'About';
  }


  onAnimationStart(){
    
  }

  onAnimationDone(){
  }
}
