import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from 'projects/web-components/src/public-api';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ButtonComponent,
        IconComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'button-component'`, () => {
    expect(component.title).toEqual('button-component');
  });

  it("#clickedButtonEvent should be raised #onClickedButton", () => {
    const $event: Event = new Event('mock-event');
    spyOn(component.clickedButtonEvent, "emit");
    component.onClickedButton($event);
    expect(component.clickedButtonEvent.emit).toHaveBeenCalledWith($event);
  });
});
