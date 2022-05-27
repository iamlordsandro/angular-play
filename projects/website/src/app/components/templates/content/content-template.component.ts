import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.scss']
})
export class ContentTemplateComponent implements OnInit {

  title: string = 'content-template-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'content-template-component';
  }

}
