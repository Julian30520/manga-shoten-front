import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;
  private tokenKey: string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
    this.tokenKey = environment.tokenKey;
  }

  signup(newUser: User): Observable<any> {
    console.log(newUser);
    return this.http.post(`${this.apiUrl}users/sign-up`, newUser);
  }

  signin(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.apiUrl}users/sign-in`, body).pipe(
      map((x: any) => {
        localStorage.setItem(this.tokenKey, x.token);
        return x;
      })
    );
  }

  getConnectedUserInfo(): Observable<User> | void {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      const decodedToken = jwt_decode<any>(token);
      const userId = decodedToken.sub;
      // console.log('isToken', this.http.get<User>(`${this.apiUrl}users/username/${userId}`,{headers}).subscribe((user:any) => {
      //   user
      // }))

      return userId;
    } else {
      this.router.navigate(['account/signin']);
    }
  }
}
