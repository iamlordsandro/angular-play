import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  title: string = 'input-component';
  type: string = '';
  allowedTypes: string[] = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
  @Input() inputType?: string;


  constructor() { }

  ngOnInit(): void {
    this.title = 'input-component';
    this.type = this.computeInputType(this.inputType);
  }

  private computeInputType(type?: string): string {
    if (type && this.computeTypeIsAllowed(type)) {
      return 'type';
    } else {
      return 'text';
    }
  }

  private computeTypeIsAllowed(type: string): boolean {
    if (this.allowedTypes.includes(type)) {
      return true;
    } else {
      return false;
    }
  }
}
