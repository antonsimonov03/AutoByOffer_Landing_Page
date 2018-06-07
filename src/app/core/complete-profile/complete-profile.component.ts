import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit, OnDestroy {

  form: FormGroup;
  alive = true;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.getCurrentUser();
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({

      building: new FormControl('1050', [Validators.required]),
      street: new FormControl('Windsor St.', [Validators.required]),
      city: new FormControl('Vancouver', [Validators.required]),
      state: new FormControl('British Columbia', [Validators.required]),
      postalCode: new FormControl('VZV 451', [Validators.required]),
      country: new FormControl('Canada', [Validators.required])
    });
  }

  completeProfile(): void {
    const userData: User = {...this.auth.user, ...this.form.value};

    this.userService.updateUser(this.auth.user._id, userData)
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        () => {
          this.router.navigateByUrl('/');
        }
      );
  }

  navHome(): void {
    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
