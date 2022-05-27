import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalLinkAnchorComponent, IconComponent } from 'projects/web-components/src/public-api';

import { SocialLinkTreeComponent } from './social-link-tree.component';

describe('SocialLinkTreeComponent', () => {
  let component: SocialLinkTreeComponent;
  let fixture: ComponentFixture<SocialLinkTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        SocialLinkTreeComponent,
        ExternalLinkAnchorComponent,
        IconComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'social-link-tree-component'`, () => {
    expect(component.title).toEqual('social-link-tree-component');
  });
});
