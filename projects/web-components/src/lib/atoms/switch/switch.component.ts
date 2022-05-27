import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wc-lib-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  title: string = 'switch-component';
  @Input() isLoading?: boolean;
  @Input() isDisabled?: boolean;
  @Input() value: boolean = true;
  @Input() label?: string;
  @Output() readonly clickedSwitchEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.title = 'switch-component';
  }

  public onClickedSwitch($event: Event) {
    this.clickedSwitchEvent.emit($event);
    console.log('clicked switch', $event);
    
  }
}
