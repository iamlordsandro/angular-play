import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalLinkAnchorComponent, IconComponent, SocialLinkTreeComponent } from 'projects/web-components/src/public-api';
import { WebsiteVersionComponent } from '../../atoms/website-version/website-version.component';
import { MadeInComponent } from '../../atoms/made-in/made-in.component';

import { FooterComponent } from './footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { BlogService } from '../../../services/blog.service';
import { GitHubService } from '../../../services/github.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ExternalLinkAnchorComponent,
        IconComponent,
        SocialLinkTreeComponent,
        MadeInComponent,
        WebsiteVersionComponent,
        FooterComponent
       ],
       imports: [
         HttpClientModule,
         BrowserAnimationsModule,
         RouterTestingModule
       ],
       providers: [
         HttpClient,
         BlogService,
         GitHubService
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'footer-component'`, () => {
    expect(component.title).toEqual('footer-component');
  });
});
