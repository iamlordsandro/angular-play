import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/website/src/environments/environment';

import { BlogPost } from '../../../models/blog-post';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'ws-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  title = 'blog-page-component';
  pageTitle = 'Blog';
  isLoading: boolean = false;
  blogPostItems: BlogPost[] = [];
  blogPostsCount: number = 0;
  blogPostsArchiveItems: BlogPostsArchiveItem[] = [];
  viewLayout: string = 'all-posts';
  listGroupOptions: ListGroupOption[] = [
    { id: 0, displayPosition: 1, label: 'All posts', action: 'all-posts', class: 'list-group-item list-group-item-action', icon: 'bi-file-earmark-richtext' },
    { id: 1, displayPosition: 2, label: 'Archive', action: 'archive', class: 'list-group-item list-group-item-action', icon: 'bi-archive' },
    { id: 2, displayPosition: 3, label: 'Subscribe', action: 'subscribe', class: 'list-group-item list-group-item-action', icon: 'bi-rss' },
  ];

  constructor(
    private _blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.pageTitle = 'Blog';
    this.getBlogPosts(environment.BLOGGER_BLOG_ID);
  }

  private getBlogPosts(blogId: string): void {
    this.blogPostItems = this._blogService.getFakeBlogPosts()
    this.blogPostsArchiveItems = this.getBlogPostsArchiveItems( this._blogService.getFakeBlogPosts());
  }
  
  getBlogPostsArchiveItems(posts: BlogPost[]): BlogPostsArchiveItem[] {
    let dates: string[] = this.uniqueDateFilter(posts, []);
    let archive: BlogPostsArchiveItem[] = [];
    for (let index = 0; index < dates.length; index++) {
      let obj:BlogPostsArchiveItem = {id: index, label: dates[index], posts: this.getBlogPostsByDate(dates[index], posts)  }
      archive.push(obj)
    }
    return archive;
  }
  
  private uniqueDateFilter(posts: BlogPost[], uniques: string[]): string[] {
    uniques = [];
    for (const value of posts) {
      if (!uniques.includes(value.published.substring(0,7))) {
        uniques.push(value.published.substring(0,7));
      }
    }
    return uniques;
  }

  private getBlogPostsByDate(date: string, posts: BlogPost[]): BlogPost[] {
    let postsByDate: BlogPost[] = [];
    for (let index = 0; index < posts.length; index++) {
      if (posts[index].published.includes(date)) {
        postsByDate.push(posts[index])
      }
    }
    return postsByDate;
  }

  public truncateHTML(text: string): string {
    let charlimit = 160;
    if (!text || text.length <= charlimit) {
      return text;
    }
    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + "...";
    return shortened;
  }

  public onButtonClickHandler($event: Event): void {
    this.viewLayout = String($event);
  }
}

export interface ListGroupOption {
  id: number;
  displayPosition: number;
  label: string;
  action: string;
  class: string;
  icon: string;
}

export interface BlogPostsArchiveItem {
  id: number;
  label: string;
  posts: BlogPost[];
}
