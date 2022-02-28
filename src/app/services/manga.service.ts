import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Params } from '../models/params';

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
    status: []
  }

  constructor(private httpClient: HttpClient) {}

  getAllManga(params: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/all/`, {params})
  }

  getOneManga(id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/${id}`);
  }

  getMangaBySearch(title: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}manga/title/${title}`)
  }

  getUser(username: any): Observable<any[]> {
    console.log('getuser')
    const headers = new HttpHeaders().set('content-type','application/json')
    return this.httpClient.get<any[]>(`${this.apiUrl}users/username/${username}`, {headers})
  }

  getTomeOfUser(id: any): Observable<any[]> {
    const headers = new HttpHeaders().set('content-type','application/json')
    return this.httpClient.get<any[]>(`${this.apiUrl}users/${id}/tomes`, {headers})
  }

  postTomeByUser(userId: any, tomeNumber: any, mangaId: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}users/tome/add/${userId}/${tomeNumber}/manga/${mangaId}`, {})
  }


  // https://api.mangadex.org/manga?limit=32&offset=0&includes[]=cover_art&includes[]=author&includes[]=artist&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&includedTags[]=5ca48985-9a9d-4bd8-be29-80dc0303db72&order[relevance]=desc


  createParmas() {
    for(const param in this.paramsSearch){
      if(param == 'includes') {
        this.paramsSearch.includedTags.push('lol')
        //console.log(this.paramsSearch.includedTags)
      }
    }
  }


  filterSearch(params: any): Observable<any[]> {
    //let params = this.createParmas()
    console.log('manga servcice', params)
    return this.httpClient.get<any[]>(`https://api.mangadex.org/manga`, {params})
  }
  
}
