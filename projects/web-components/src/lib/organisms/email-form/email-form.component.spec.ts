import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailFormComponent } from './email-form.component';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmailFormComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'email-form-component'`, () => {
    expect(component.title).toEqual('email-form-component');
  });
});
