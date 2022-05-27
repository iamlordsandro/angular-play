import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationBarComponent} from '../../molecules/navigation-bar/navigation-bar.component'

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavigationBarComponent,
        HeaderComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'header-component'`, () => {
    expect(component.title).toEqual('header-component');
  });
});
