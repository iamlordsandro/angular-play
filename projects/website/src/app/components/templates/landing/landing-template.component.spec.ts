import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LandingTemplateComponent } from './landing-template.component';

describe('LandingTemplateComponent', () => {
  let component: LandingTemplateComponent;
  let fixture: ComponentFixture<LandingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LandingTemplateComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'landing-template-component'`, () => {
    expect(component.title).toEqual('landing-template-component');
  });
});
