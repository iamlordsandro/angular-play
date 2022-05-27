import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ExternalLinkAnchorComponent, IconComponent, SocialLinkTreeComponent } from 'projects/web-components/src/public-api';

import { MadeInComponent } from '../../atoms/made-in/made-in.component';
import { WebsiteVersionComponent } from '../../atoms/website-version/website-version.component';
import { NavigationBarComponent } from '../../molecules/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../organisms/footer/footer.component';
import { HeaderComponent } from '../../organisms/header/header.component';

import { SiteTemplateComponent } from './site-template.component';

describe('SiteTemplateComponent', () => {
  let component: SiteTemplateComponent;
  let fixture: ComponentFixture<SiteTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      declarations: [
        NavigationBarComponent,
        ExternalLinkAnchorComponent,
        IconComponent,
        SocialLinkTreeComponent,
        WebsiteVersionComponent,
        MadeInComponent,
        SiteTemplateComponent,
        HeaderComponent,
        FooterComponent
      ],
      providers: [
        HttpClient
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'site-template-component'`, () => {
    expect(component.title).toEqual('site-template-component');
  });
});
