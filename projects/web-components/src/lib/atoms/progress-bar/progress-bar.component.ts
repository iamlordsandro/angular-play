import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-lib-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  title: string = 'progress-bar-component';
  width: string = '';
  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'progress-bar-component';
    this.width = this.computeProgressBarWidth(this.value);
  }

  computeProgressBarWidth(value?:string):string {
    if (value) {
      return value + '%';
    } else {
      return '5 %';
    }
  }

}
