import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ExternalLinkAnchorComponent, IconComponent, SocialLinkTreeComponent } from 'projects/web-components/src/public-api';
import { AppComponent } from './app.component';
import { WebsiteVersionComponent } from './components/atoms/website-version/website-version.component';
import { MadeInComponent } from './components/atoms/made-in/made-in.component';
import { NavigationBarComponent} from './components/molecules/navigation-bar/navigation-bar.component'
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        NavigationBarComponent,
        ExternalLinkAnchorComponent,
        IconComponent,
        SocialLinkTreeComponent,
        WebsiteVersionComponent,
        MadeInComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
