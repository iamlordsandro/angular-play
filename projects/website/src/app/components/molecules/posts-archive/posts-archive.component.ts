import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../../models/blog-post';

@Component({
  selector: 'ws-posts-archive',
  templateUrl: './posts-archive.component.html',
  styleUrls: ['./posts-archive.component.scss']
})
export class PostsArchiveComponent implements OnInit {

  title = 'posts-archive-component';
  @Input() blogPostsArchiveItems: BlogPostsArchiveItem[] =[];

  constructor() { }

  ngOnInit(): void {
    this.title = 'posts-archive-component';
  }

  public identifyItem(index: number, item: BlogPostsArchiveItem) {
    return item ? index : undefined;
  }

  public identifyItem2(index: number, item: BlogPost) {
    return item ? index : undefined;
  }

}

export interface BlogPostsArchiveItem {
  id: number;
  label: string;
  posts: BlogPost[];
}
