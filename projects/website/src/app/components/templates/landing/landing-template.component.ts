import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-landing-template',
  templateUrl: './landing-template.component.html',
  styleUrls: ['./landing-template.component.scss']
})
export class LandingTemplateComponent implements OnInit {

  title: string = 'landing-template-component';

  constructor() { }

  ngOnInit(): void {
    this.title = 'landing-template-component';
  }

}
