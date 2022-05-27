import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent, PageTitleComponent, TypewriterComponent, EmailFormComponent } from 'projects/web-components/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutPageComponent } from './about-page.component';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AboutPageComponent,
        AvatarComponent,
        PageTitleComponent,
        TypewriterComponent,
        EmailFormComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'about-page-component'`, () => {
    expect(component.title).toEqual('about-page-component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('About');
  });
});
