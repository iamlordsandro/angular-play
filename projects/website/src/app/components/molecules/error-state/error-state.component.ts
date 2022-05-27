import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-error-state',
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.scss']
})
export class ErrorStateComponent implements OnInit {

  title: string = 'error-state-component';
  @Input() avatarMood?: string = '';
  @Input() color?: string = '';
  @Input() icon?: string = '';
  @Input() errorCode: string = '';
  @Input() errorMessage?: string = '';
  @Input() size?: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'error-state-component';
  }

}
