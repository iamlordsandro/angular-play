import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTitleComponent,  SpinnerComponent } from 'projects/web-components/src/public-api';
import { BlogService } from '../../../services/blog.service';
import { ErrorStateComponent } from '../../molecules/error-state/error-state.component';
import { BlogPageComponent } from './blog-page.component';

describe('BlogPageComponent', () => {
  let component: BlogPageComponent;
  let fixture: ComponentFixture<BlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BlogPageComponent,
        PageTitleComponent,
        SpinnerComponent,
        ErrorStateComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        HttpClient,
        BlogService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'blog-page-component'`, () => {
    expect(component.title).toEqual('blog-page-component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Blog');
  });
});
