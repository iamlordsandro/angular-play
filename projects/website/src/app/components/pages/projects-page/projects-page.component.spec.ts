import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTitleComponent, UnderConstructionComponent, SpinnerComponent } from 'projects/web-components/src/public-api';
import { ErrorStateComponent } from '../../molecules/error-state/error-state.component';

import { GitHubService } from '../../../services/github.service';

import { ProjectsPageComponent } from './projects-page.component';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectsPageComponent,
        PageTitleComponent,
        SpinnerComponent,
        UnderConstructionComponent,
        ErrorStateComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClient,
        GitHubService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'projects-page-component'`, () => {
    expect(component.title).toEqual('projects-page-component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Projects');
  });
});
