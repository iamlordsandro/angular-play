import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionComponent } from './under-construction.component';

describe('UnderConstructionComponent', () => {
  let component: UnderConstructionComponent;
  let fixture: ComponentFixture<UnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'under-construction-component'`, () => {
    expect(component.title).toEqual('under-construction-component');
  });
});
