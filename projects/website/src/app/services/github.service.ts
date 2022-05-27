import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';

import { GitHubRepository } from './../models/github-repository';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(
    private _http: HttpClient
  ) { }

  getRepositoryByUser(githubUsername: string): Observable<GitHubRepository[]> {
    return this._http.get<GitHubRepository[]>(environment.GITHUB_BASE_URL + 'users/' + githubUsername + '/repos')
      .pipe(
        map(data => {
          return data;
        }
        ));
  }
}
