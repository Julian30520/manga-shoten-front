import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MangaService } from 'src/app/services/manga.service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.scss'],
})
export class PageAccountComponent implements OnInit {
  public userProfil: FormGroup;
  username = this.authService.getConnectedUserInfo();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private mangaService: MangaService,
    private userService: UserService
  ) {
    this.userProfil = this.initForm();
  }

  ngOnInit(): void {
    console.log('account page', this.username);
    this.mangaService.getUser(this.username).subscribe((user: any) => {
      console.log('user', user);

      this.userProfil = this.initForm(user);
    });
  
  }

  private initForm(user?: User): FormGroup {
    return this.fb.group({
      username: [user ? user.username : ''],
      firstname: [user ? user.firstName : ''],
      lastname: [user ? user.lastName : ''],
      mail: [user ? user.mail : ''],
    });
  }

  submit() {
    console.log(this.userProfil.value);  
    this.userService.UpdateUser().subscribe((user: any) => {
      this.userProfil = this.initForm(user);
    });
  }
}
