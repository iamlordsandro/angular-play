import { Component, OnInit } from '@angular/core';
import { GitHubUsers } from '../../../configs/github-users'

import { GitHubService } from './../../../services/github.service';

import { GitHubRepository } from './../../../models/github-repository';

@Component({
  selector: 'ws-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  title = 'projects-page-component';
  pageTitle = 'Projects';
  isLoading: boolean = false;
  githubUsername: string = GitHubUsers[0].username;
  repositoriesList: GitHubRepository[] = [];
  errorMessage: string = '';

  constructor(
    private _gitHubService: GitHubService
  ) { }

  ngOnInit(): void {
    this.pageTitle = 'Projects';
    this.getGitHubRepositories(this.githubUsername);
  }
  
  private getGitHubRepositories(user: string): void {
    this.isLoading = true;
    this._gitHubService.getRepositoryByUser(user)
      .subscribe(res => {
        this.repositoriesList = [...this.repositoriesList, ...res];
        this.isLoading = false;
      });
  }

  identifyItem(index: number, item: GitHubRepository) {
    return item.id;
  }
}
