import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Params } from '../models/params';
import { TokenService } from '../modules/account/services/token.service';

const headers = new HttpHeaders().set('content-type', 'application/json');
@Injectable({
  providedIn: 'root',
})
export class MangaService {
  public apiUrl = environment.apiUrl;

  paramsSearch: Params = {
    limit: 0,
    offset: 0,
    title: '',
    includedTags: [],
    contentRating: [],
    publicationDemographic: [],
    status: [],
  };

  constructor(private httpClient: HttpClient) {}
  /**Get All Manga Home */
  getAllManga(params: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/all/`, { params });
  }
  /** Get Manga One */
  getOneManga(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/${id}`);
  }
  /** Barre de recherche  */
  getMangaBySearch(title: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/title/${title}`);
  }
  /**Get User with name */
  getUser(username: any): Observable<any[]> {
    console.log('getuser');
    return this.httpClient.get<any[]>(
      `${this.apiUrl}users/username/${username}`,
      { headers }
    );
  }

  /** Tome by User */
  getTomeOfUser(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}users/${id}/tomes`, {
      headers,
    });
  }

  /**Post All Tome */
  postAllTome(userId: any, mangaId: any): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUrl}users/manga/add/${userId}/${mangaId}`,
      {}
    );
  }
  /**Post One tome  */
  postTomeByUser(userId: any, tomeNumber: any, mangaId: any): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUrl}users/tome/add/${userId}/${tomeNumber}/manga/${mangaId}`,
      {}
    );
  }

  /**get Id of Tome in bibli */
  getIdTome(userId: any): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}users/${userId}/bibli`, {
      headers,
    });
  }
  /**Delete Manga From Bibliotheque */
  deleteMangaBibli(idUser: any, idManga: any): Observable<any> {
    return this.httpClient.delete(
      `${this.apiUrl}users/manga/remove/${idUser}/${idManga}`, {headers}
    );
  }
  /**Delete Tome From Bibliotheque */
  deleteTomeBibli(idUser: any, idTome: any) {
    return this.httpClient.delete(
      `${this.apiUrl}users/tome/remove/${idUser}/${idTome}`,
      { headers }
    );
  }

  // https://api.mangadex.org/manga?limit=32&offset=0&includes[]=cover_art&includes[]=author&includes[]=artist&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&includedTags[]=5ca48985-9a9d-4bd8-be29-80dc0303db72&order[relevance]=desc

  createParmas() {
    for (const param in this.paramsSearch) {
      if (param == 'includes') {
        this.paramsSearch.includedTags.push('lol');
        //console.log(this.paramsSearch.includedTags)
      }
    }
  }

  filterSearch(params: any): Observable<any[]> {
    //let params = this.createParmas()
    console.log('manga servcice', params);
    return this.httpClient.get<any[]>(`https://api.mangadex.org/manga`, {
      params,
    });
  }
}
