import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GitHubService } from './github.service';

describe('GitHubService', () => {
  let service: GitHubService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        GitHubService
      ]
    });
    service = TestBed.inject(GitHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getRepositoryByUser() function', () => {
    expect(service.getRepositoryByUser).toBeTruthy();
   });

});
