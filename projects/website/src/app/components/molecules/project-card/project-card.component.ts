import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ws-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  title = 'project-card-component';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() html_url: string = '';
  @Input() description: string = '';
  @Input() updated_at: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'project-card-component';
  }

}
