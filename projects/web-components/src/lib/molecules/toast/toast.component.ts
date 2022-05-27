import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-lib-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  title: string = 'toast-component';
  id: string = 'toast-id-';
  class: string = '';
  @Input() customID?: string;
  @Input() head?: string;
  @Input() subhead?: string;
  @Input() body?: string;
  @Input() isShown?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.title = 'toast-component';
    this.id = this.computeToastId(this.customID);
    this.class = this.computeToastClass(this.isShown);
  }

  computeToastId(id?: string): string {
    if (id) {
      return this.id;
    } else {
      return 'toast-id-0'
    }
  }

  computeToastClass(isShown?: boolean):string{
    if (isShown && isShown == true) {
      return 'toast show';
    } else {
      return 'toast hide';
    }
  }


}
