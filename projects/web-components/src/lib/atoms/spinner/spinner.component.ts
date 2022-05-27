import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-lib-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  title: string = 'spinner-component';
  @Input() isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.title = 'spinner-component';
  }

}
