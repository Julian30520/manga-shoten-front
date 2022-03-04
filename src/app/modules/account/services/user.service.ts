import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

  UpdateUser(): Observable<any[]> {
    console.log('UpdateUser');
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.patch<any[]>(
      `${this.apiUrl}users/update/`,
      {}
    );
  }
}
