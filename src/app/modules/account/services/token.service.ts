import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKey: string;

  constructor(private router: Router) {
    this.tokenKey = environment.tokenKey;
  }

  public getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      return token;
    } else {
      return null;
    }
  }

  //Savoir si l'utilisateur est connecté
  public get isLoggedIn(): boolean {
    let authToken = localStorage.getItem(this.tokenKey);
    return authToken !== null ? true : false;
  }

  // deconnecté l'utilisateur
  public Logout() {
    const removeToken = localStorage.removeItem(this.tokenKey);
    if (removeToken == null) {
      this.router.navigate(['/home']);
    }
  }

  public getCurrentUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwt_decode<any>(token);
      const userId = decodedToken.sub;
      return userId;
    } else {
      return null;
    }
  }
}
