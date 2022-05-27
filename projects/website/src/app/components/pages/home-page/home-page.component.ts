import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { bounceAnimation } from 'angular-animations';

@Component({
  selector: 'ws-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    bounceAnimation({ duration: 2000 })
  ]
})
export class HomePageComponent implements OnInit {

  title = 'home-page-component';
  pageTitle = 'Welcome!';
  animationState: boolean = false;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(_event: any) {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    }
    this._router.navigate(['/about']);
  }

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.pageTitle = 'Welcome!';
  }

  isAnimationDone() {
    this.animationState = !this.animationState;
  }
}
