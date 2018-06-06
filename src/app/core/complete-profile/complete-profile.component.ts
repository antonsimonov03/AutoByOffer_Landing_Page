import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  form: FormGroup;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      building: new FormControl('1050'),
      street: new FormControl('Windsor St.'),
      city: new FormControl('Vancouver'),
      state: new FormControl('British Columbia'),
      postalCode: new FormControl('VZV 451'),
      country: new FormControl('Canada')
    });
  }

  submit(): void {
    console.log(this.form.value);
  }

}
