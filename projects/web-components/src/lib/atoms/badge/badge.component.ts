import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-lib-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  title: string = 'badge-component';
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'badge-component';
  }

}
