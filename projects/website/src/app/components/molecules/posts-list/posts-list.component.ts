import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../../models/blog-post';

@Component({
  selector: 'ws-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  title = 'posts-list-component';
  @Input() posts: BlogPost[] =[];

  constructor() { }

  ngOnInit(): void {
    this.title = 'posts-list-component';
  }

  public identifyItem(index: number, item: BlogPost) {
    return item ? index : undefined;
  }

}
