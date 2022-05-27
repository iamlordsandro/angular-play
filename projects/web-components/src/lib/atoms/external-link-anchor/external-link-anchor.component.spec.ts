import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from 'projects/web-components/src/public-api';
import { ExternalLinkAnchorComponent } from './external-link-anchor.component';

describe('ExternalLinkAnchorComponent', () => {
  let component: ExternalLinkAnchorComponent;
  let fixture: ComponentFixture<ExternalLinkAnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ExternalLinkAnchorComponent,
        IconComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLinkAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'external-link-anchor-component'`, () => {
    expect(component.title).toEqual('external-link-anchor-component');
  });
});
