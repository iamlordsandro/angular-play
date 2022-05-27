import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wc-lib-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  title: string = 'list-group-component';
  @Input() listGroupOptions: listGroupOption[] = [];
  @Input() activeItem: string = '';
  @Output() readonly clickedButtonEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.title = 'list-group-component';
  }

  public onClickedButton($action: string) {
    this.clickedButtonEvent.emit($action);
  }

  public identifyItem(index: number, item: listGroupOption) {
    return item ? item.id : undefined;
  }
}

export interface listGroupOption {
  id: number;
  displayPosition: number;
  label: string;
  action: string;
  class: string;
  icon: string;
}
