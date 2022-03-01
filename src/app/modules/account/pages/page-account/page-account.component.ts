import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MangaService } from 'src/app/services/manga.service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

const USER_KEY = 'auth-user'
@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.scss'],
})
export class PageAccountComponent implements OnInit {
  public userProfil: FormGroup;
  username = this.authService.getConnectedUserInfo()
  

  constructor(private fb: FormBuilder, private authService: AuthService, private mangaService: MangaService) {
    this.userProfil = this.initForm();
  }

  

  ngOnInit(): void {
    console.log('account page', this.username)
    this.mangaService.getUser(this.username).subscribe((user: any) => {
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      this.userProfil = this.initForm(user);
    });
  }

  private initForm(user?: User): FormGroup {
    return this.fb.group({
      username: [user ? user.username : ''],
      firstname: [user ? user.firstname : 'John'],
      lastname: [user ? user.lastname : 'Saitama'],
      mail: [user ? user.mail : ''],
    });
  }
}
