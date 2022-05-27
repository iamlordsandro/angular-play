import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent, IconComponent } from 'projects/web-components/src/public-api';

import { ErrorStateComponent } from './error-state.component';

import { ErrorInterceptorService } from '../../../services/error-interceptor.service';

describe('ErrorStateComponent', () => {
  let component: ErrorStateComponent;
  let fixture: ComponentFixture<ErrorStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ErrorStateComponent,
        IconComponent,
        AvatarComponent
       ],
       providers: [
         ErrorInterceptorService
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'error-state-component'`, () => {
    expect(component.title).toEqual('error-state-component');
  });
});
