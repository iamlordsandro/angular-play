import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { environment } from 'projects/website/src/environments/environment';
import { BlogPost } from '../../../models/blog-post';

import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'ws-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  POST_ID: string = '7706273476706534553';
  title = 'post-page-component';
  pageTitle = 'Post';
  isLoading: boolean = false;
  post: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private _blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.pageTitle = 'Post';
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('id');
    this.getBlogPostById(environment.BLOGGER_BLOG_ID, postIdFromRoute || this.POST_ID);
  }

  private getBlogPostById(blogId: string, postId: string): void {
    this.isLoading = true;
    
  }

  public identifyItem(index: number, item: string) {
    return Number(item) ? index : undefined;
  }

}
