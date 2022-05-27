import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'wc-lib-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  title: string = 'email-form-component';
  isLoading: boolean = false;
  isSendSuccess: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = 'email-form-component';
  }

  public emailForm: FormGroup = new FormGroup({
    senderNameValidation: new FormControl(null, {
      validators: (
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ),
      updateOn: 'change'
    }),
    senderEmailValidation: new FormControl(null, {
      validators: (
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ),
      updateOn: 'change'
    }),
    senderMessageValidation: new FormControl(null, {
      validators: (
        Validators.required,
        Validators.minLength(25),
        Validators.maxLength(256)
      ),
      updateOn: 'change'
    })
  });

  get senderNameValidation(): any {
    return this.emailForm.get('senderNameValidation');
  }
  get senderEmailValidation(): any {
    return this.emailForm.get('senderEmailValidation');
  }

  get senderMessageValidation(): any {
    return this.emailForm.get('senderMessageValidation');
  }

  public onSubmitSendEmail($event: Event) {
    this.isLoading = true;
    emailjs.sendForm('service_xzbah2l', 'template_ajzxnnq', $event.target as HTMLFormElement, '2sf9np_zLq0W8fJdX')
      .then((result: EmailJSResponseStatus) => {
          this.setSendResults(result.status);
      }, (error) => {
        this.setSendResults(error.status);
      });
  }

  private setSendResults(r: number){
    if(r === 200){
      this.isLoading = false;
      this.isSendSuccess = true;
      this.emailForm.reset();
    } else {
      this.isLoading = false;
      this.isSendSuccess = false;
    }
  }
}