import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTitleComponent } from 'projects/web-components/src/public-api';

import { ContactPageComponent } from './contact-page.component';

describe('ContactsComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ContactPageComponent,
        PageTitleComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'contact-page-component'`, () => {
    expect(component.title).toEqual('contact-page-component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Contact');
  });
});
