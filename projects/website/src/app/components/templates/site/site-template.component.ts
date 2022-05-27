import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-site-template',
  templateUrl: './site-template.component.html',
  styleUrls: ['./site-template.component.scss']
})
export class SiteTemplateComponent implements OnInit {

  title: string = 'site-template-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'site-template-component';
  }

}
