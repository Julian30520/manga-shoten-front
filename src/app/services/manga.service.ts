import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  public apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllManga(params: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/all/`, {params})
  }

  getOneManga(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/${id}`)
  }

  getMangaBySearch(title: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/title/${title}`)
  }
}
