import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  public apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllManga(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/all/30`);
  }

  getOneManga(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/${id}`);
  }
}
