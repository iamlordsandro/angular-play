import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  title: string = 'post-card-component';
  @Input() id: string = '';
  @Input() postTitle: string = '';
  @Input() author: string = '';
  @Input() published: string = '';
  @Input() content: string = '';
  @Input() replies: string = '';
  truncateContent: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'post-card-component';
    this.truncateContent = this.truncateHTML(this.content);
  }

  private truncateHTML(text: string): string {
    let charlimit = 200;
    if (!text || text.length <= charlimit) {
      return text;
    }
    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + "...";
    return shortened;
  }
}
