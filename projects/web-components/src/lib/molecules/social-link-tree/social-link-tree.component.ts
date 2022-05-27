import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wc-lib-social-link-tree',
  templateUrl: './social-link-tree.component.html',
  styleUrls: ['./social-link-tree.component.scss']
})
export class SocialLinkTreeComponent implements OnInit {

  title: string = 'social-link-tree-component';
  @Input() orientation: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'social-link-tree-component';
  }

}
