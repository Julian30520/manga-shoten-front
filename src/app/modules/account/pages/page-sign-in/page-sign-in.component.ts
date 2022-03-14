import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss'],
})
export class PageSignInComponent implements OnInit {
  public errorForm: boolean;
  loading = false;
  constructor(private authService: AuthService, private router: Router) {
    this.errorForm = false;
  }

  ngOnInit(): void {}

  public onSubmit(submittedForm: any): void {
    console.log(submittedForm.form.value);
    this.loading = true;
    const username = submittedForm.form.value['username'];
    const password = submittedForm.form.value['password'];
    if (username !== '' && password !== '') {
      this.authService.signin(username, password).subscribe(
        (resp) => {
          if (resp) {
            this.alertSignInSucces();
            this.router.navigate(['account/user']);
          } else {
            console.log('lol');
          }
          // console.log('Component Page Signin: ', resp);
        },
        (error) => {
          this.alertSignInFailed();
          this.router.navigate(['account/signin']);
          this.loading = false;
        }
      );
    } else {
      this.errorForm = true;
    }
  }
  alertSignInSucces() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully',
    });
  }

  alertSignInFailed() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: 'Login or PassWord pas bon :)',
    });
  }
}
