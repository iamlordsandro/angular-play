import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { BlogPost, GETPostsResponse } from '../models/blog-post';
import { FakeBlogPosts } from '../configs/fake-blog-posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  fakeBlogPosts: BlogPost[] = [];
  isLoading$ = new BehaviorSubject<boolean>(true);
  noContent$ = new BehaviorSubject<boolean>(false);
  noResults$ = new BehaviorSubject<boolean>(false);
  onSearchPage$ = new BehaviorSubject<boolean>(false);

  constructor(
    private _http: HttpClient
  ) { }

  getFakeBlogPosts():BlogPost[] {
    this.fakeBlogPosts = FakeBlogPosts;
    return this.fakeBlogPosts;
  }
}
