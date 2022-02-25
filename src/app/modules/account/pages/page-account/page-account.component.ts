import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.scss'],
})
export class PageAccountComponent implements OnInit {
  public userProfil: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.userProfil = this.initForm();

    this.authService.getConnectedUserInfo()?.subscribe((user: User) => {
      this.userProfil = this.initForm(user);
    });
  }

  ngOnInit(): void {}

  private initForm(user?: User): FormGroup {
    return this.fb.group({
      username: [user ? user.username : ''],
      firstname: [user ? user.firstname : 'John'],
      lastname: [user ? user.lastname : 'Saitama'],
      mail: [user ? user.mail : ''],
    });
  }
}
