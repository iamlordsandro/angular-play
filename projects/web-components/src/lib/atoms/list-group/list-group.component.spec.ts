import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from 'projects/web-components/src/public-api';

import { ListGroupComponent } from './list-group.component';

describe('ListGroupComponent', () => {
  let component: ListGroupComponent;
  let fixture: ComponentFixture<ListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ListGroupComponent,
        IconComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'list-group-component'`, () => {
    expect(component.title).toEqual('list-group-component');
  });
});
