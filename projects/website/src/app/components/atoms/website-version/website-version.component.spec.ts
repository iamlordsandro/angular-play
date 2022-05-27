import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteVersionComponent } from './website-version.component';

describe('WebsiteVersionComponent', () => {
  let component: WebsiteVersionComponent;
  let fixture: ComponentFixture<WebsiteVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'website-version-component'`, () => {
    expect(component.title).toEqual('website-version-component');
  });
});
