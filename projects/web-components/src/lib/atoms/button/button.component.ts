import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  title: string = 'button-component';
  @Input() class?: string = '';
  @Input() label?: string;
  @Input() icon: string = '';
  @Output() readonly clickedButtonEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.title = 'button-component';
    this.class = this.computeButtonClass(this.class);
    this.label = this.computeButtonLabel(this.label);
  }

  private computeButtonClass(classes?:string):string{
    if (!classes || classes == undefined || classes === ''){
      let c: string = 'btn btn-primary';
      return c;  
    } else {
      return 'btn ' + classes;
    }
  }

  private computeButtonLabel(label?:string):string{
    if (!label || label == undefined || label === ''){
      let l: string = 'Default Label';
      return l;  
    } else {
      return label;
    }
  }

  public onClickedButton($event: Event) {
    this.clickedButtonEvent.emit($event);
  }
}
