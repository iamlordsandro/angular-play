import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NavigationBarComponent
      ],
      imports:[
        RouterTestingModule
      ]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'navigation-bar-component'`, () => {
    expect(component.title).toEqual('navigation-bar-component');
  });
});
