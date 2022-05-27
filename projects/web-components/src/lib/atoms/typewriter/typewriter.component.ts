import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {

  title: string = 'typewriter-component';
  @Input() string: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'typewriter-component';
  }

}
