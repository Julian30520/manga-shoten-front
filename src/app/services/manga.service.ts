import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

   headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'} )
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getAllManga(): Observable<any> {
    return this.http.get<any>('http://localhost/8080/manga/all', {'headers': this.headers} )
  }
}
// https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/4113e972-d228-4172-a885-cb30baffff97.jpg