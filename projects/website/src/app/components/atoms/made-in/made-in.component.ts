import { Component, OnInit } from '@angular/core';
import { heartBeatAnimation } from "angular-animations";

@Component({
  selector: 'ws-made-in',
  templateUrl: './made-in.component.html',
  styleUrls: ['./made-in.component.scss'],
  animations: [
    heartBeatAnimation({ duration: 2000})
  ]
})
export class MadeInComponent implements OnInit {

  title: string = 'made-in-component';
  animationState = false;

  constructor() { }

  ngOnInit(): void {
    this.title = 'made-in-component';
  }

  isAnimationDone() {
    this.animationState = !this.animationState;
  }

}
