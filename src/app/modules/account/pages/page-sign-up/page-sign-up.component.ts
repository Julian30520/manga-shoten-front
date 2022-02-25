import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss'],
})
export class PageSignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim),
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  public onSubmit(): void {
    const UserNameValue = this.form.value['username'];
    const emailValue = this.form.value['email'];
    const passwordValue = this.form.value['password'];

    const user: User = {
      username: UserNameValue,
      mail: emailValue,
      password: passwordValue,
      firstname: '',
      lastname: '',
      // role: ['users'],
      role: {
        roleId: 2,
        codeRole: 'ROLE_USER',
      },
    };

    if (user.mail !== '' && user.password !== '') {
      this.authService.signup(user).subscribe((resp) => {
        this.router.navigate(['account/signin']);
      });
    } else {
    }
  }

  public redirection() {
    this.router.navigate(['login']);
  }
}
