import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageTitleComponent,  SpinnerComponent } from 'projects/web-components/src/public-api';
import { ErrorStateComponent } from '../../molecules/error-state/error-state.component';

import { BlogService } from '../../../services/blog.service';

import { PostPageComponent } from './post-page.component';

describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostPageComponent,
        PageTitleComponent,
        SpinnerComponent,
        ErrorStateComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        HttpClient,
        BlogService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'post-page-component'`, () => {
    expect(component.title).toEqual('post-page-component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Post');
  });
});
