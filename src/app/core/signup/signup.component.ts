import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  phoneMask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('John', [Validators.required]),
      lastName: new FormControl('Smith', [Validators.required]),
      email: new FormControl('john.smith@gmail.com', [Validators.required, Validators.email]),
      phone: new FormControl('(123) 456-7890', [Validators.required, Validators.pattern(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)]),
      password: new FormControl('12345', [Validators.required, Validators.minLength(1)]),
      confirmPassword: new FormControl('12345', [Validators.required])
    });
  }

  submit(): void {
    const userBody = this.form.value;

    delete userBody.confirmPassword;

    this.auth.signup(userBody);
  }

  get password(): string {
    return this.form.get('password').value;
  }

  get confirmPassword(): string {
    return this.form.get('confirmPassword').value;
  }

}
