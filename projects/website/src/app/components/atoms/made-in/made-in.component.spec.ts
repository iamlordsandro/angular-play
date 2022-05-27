import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MadeInComponent } from './made-in.component';

describe('MadeInComponent', () => {
  let component: MadeInComponent;
  let fixture: ComponentFixture<MadeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MadeInComponent
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'made-in-component'`, () => {
    expect(component.title).toEqual('made-in-component');
  });
});
