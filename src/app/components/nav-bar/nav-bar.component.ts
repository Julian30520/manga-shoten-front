import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/modules/account/services/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public logged: boolean;
  constructor(public tokenService: TokenService) {
    this.logged = tokenService.isLoggedIn;
  }

  ngOnInit(): void {}

  loginOut() {
    this.tokenService.Logout();
  }
}
