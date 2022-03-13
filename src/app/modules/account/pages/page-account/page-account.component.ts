import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { MangaService } from 'src/app/services/manga.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { UserService } from '../../services/user.service';

const USER_KEY = 'auth-user';
@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.scss'],
})
export class PageAccountComponent implements OnInit {
  public infos: any;
  public userProfil: FormGroup;
  public username: any;
  public apiUrl = environment.apiUrl;
  loading = false;
  public id = this.tokenService.getCurrentUserId();
  public body = this.tokenService.getCurrentUserId();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private mangaService: MangaService,
    private userService: UserService,
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) {
    this.userProfil = this.initForm();
    this.username = this.authService.getConnectedUserInfo();
  }

  ngOnInit(): void {
    console.log('account page', this.username);
    this.mangaService.getUser(this.username).subscribe((user: any) => {
      console.log('user', user);
      this.infos = user.mail;
      console.log('user', this.infos);

      // window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      this.userProfil = this.initForm(user);
      console.log(this.userProfil);
    });
  }

  // this.tokenService.getCurrentUserId();
  private initForm(user?: User): FormGroup {
    const userid = this.tokenService.getCurrentUserId();
    return this.fb.group({
      id: userid,
      username: [user ? user.username : ''],
      mail: [user ? user.mail : ''],
      avatar: null,
      firstName: [user ? user.firstName : ''],
      lastName: [user ? user.lastName : ''],
      dateOfBirth: null,
    });
  }

  submit() {
    // const req = this.userProfil.value;
    // console.log(this.userProfil.value);

    this.http
      .patch(`${this.apiUrl}users/update/`, this.userProfil.value)
      .subscribe((resp) => {
        this.alertUpdate();
        this.router.navigate(['account/user']);
      });
    // console.log(ini);

    // this.userService.UpdateUser(req).subscribe({});
  }

  suppUser() {
    // this.userService.DeleteUser(id),{}.
    //   pipe(first()).subscribe(() => {
    //     console.log("c'est ok la suppression");
    //   });
    return this.http
      .delete<any>(`${this.apiUrl}users/${this.userProfil.value.id}/delete`, {
        body: this.userProfil.value.id,
      })
      .subscribe(() => {
        this.tokenService.Logout();
        console.log('Dégage on ne veut pas de toi');
      });
  }

  alertUpdate() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Update successful 保護する !!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  alertDelete() {
    Swal.fire({
      title: 'Are you sure? 下衆野郎 !!',
      text: "You won't be able to revert this! 本気ですか !!",
      icon: 'warning',
      iconColor: '#e05555',
      showCancelButton: true,
      confirmButtonColor: '#6fb290',
      cancelButtonColor: '#e05555',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.suppUser();
        Swal.fire({
          // 'Deleted!',
          // 'Your Account has been deleted. さらばだ !!',
          // 'success'
          title: 'Deleted!',
          text: 'Your Account has been deleted. さらばだ !!',
          imageUrl: 'https://c.tenor.com/0AEB38Hz1PMAAAAC/death-note-light.gif',
          imageWidth: 400,
          imageHeight: 300,
          imageAlt: 'Custom image',
          timer: 4000,
        });
      }
    });
  }
}
