import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-external-link-anchor',
  templateUrl: './external-link-anchor.component.html',
  styleUrls: ['./external-link-anchor.component.scss']
})
export class ExternalLinkAnchorComponent implements OnInit {

  title: string = 'external-link-anchor-component';
  @Input() class: string = '';
  @Input() label: string = '';
  @Input() isLabelHidden: boolean = false;
  @Input() icon: string = '';
  @Input() isIconHidden: boolean = false;
  @Input() href: string = '';
  @Input() target: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'external-link-anchor-component';
  }

}
