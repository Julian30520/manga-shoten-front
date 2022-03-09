import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }
  UpdateUser(userUpdate: User): Observable<any[]> {
    const body = { userUpdate: userUpdate };
    console.log('UpdateUser');
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.patch<any[]>(`${this.apiUrl}users/update/`, body);
  }

  DeleteUser(id: any): Observable<any[]> {
    return this.httpClient.delete<any>(`${this.apiUrl}/users/${id}/delete`, {
      body: '',
    });
  }
}
