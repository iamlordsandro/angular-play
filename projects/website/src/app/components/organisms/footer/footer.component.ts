import { Component, OnChanges, OnInit } from '@angular/core';
import { environment } from 'projects/website/src/environments/environment';

import { GitHubUsers } from '../../../configs/github-users'

import { BlogPost } from '../../../models/blog-post';
import { GitHubRepository } from '../../../models/github-repository';
import { SocialLink } from '../../../models/social-link';

import { BlogService } from '../../../services/blog.service';
import { GitHubService } from '../../../services/github.service';
import { SocialLinksService } from '../../../services/social-links.service';

@Component({
  selector: 'ws-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title: string = 'footer-component';
  socialLinkItems: SocialLink[] = [];
  isLoading: boolean = false;
  githubUsername: string = GitHubUsers[0].username;
  blogPostItems: BlogPost[] = [];
  repositoriesList: GitHubRepository[] = [];

  constructor(
    private _socialLinksService: SocialLinksService,
    private _gitHubService: GitHubService,
    private _blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.title = 'footer-component';
    this.socialLinkItems = this.getSocialLinksItems();
    this.getGitHubRepositories(this.githubUsername);
    this.getBlogPosts(environment.BLOGGER_BLOG_ID);
  }

  getSocialLinksItems(): SocialLink[] {
    let socialLinks: SocialLink[];
    socialLinks = this._socialLinksService.getSocialLinks();
    return socialLinks;
  }

  identifyItem(index: number, item: SocialLink) {
    return item.label ? index : undefined;
  }

  identifyItem2(index: number, item: GitHubRepository) {
    return item.id ? index : undefined;
  }

  identifyItem3(index: number, item: BlogPost) {
    return item.id ? index : undefined;
  }

  private getBlogPosts(blogId: string): void {
    this.isLoading = true;
    this.blogPostItems = this._blogService.getFakeBlogPosts().slice(0,3);
  }

  private getGitHubRepositories(user: string): void {
    this.isLoading = true;
    this._gitHubService.getRepositoryByUser(user)
      .subscribe(res => {
        this.repositoriesList = [...this.repositoriesList, ...res.slice(0,3)];
        this.isLoading = false;
      });
  }
}
