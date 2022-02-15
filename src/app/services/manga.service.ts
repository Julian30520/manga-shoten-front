import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  public apiUrl = environment.apiUrl;

  paramsSearch:any = {
    'limit': 32,
    'offset': 0,
    'includes' : [''],
    'contentRating': ["safe", "suggestive" ,"erotica", "pornographic"],
    'publicationDemographic': ["shounen", "shoujo","josei", "seinen" ,"none"],
    'status': ["ongoing","completed", "hiatus", "cancelled"],
  }

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


  // https://api.mangadex.org/manga?limit=32&offset=0&includes[]=cover_art&includes[]=author&includes[]=artist&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&includedTags[]=5ca48985-9a9d-4bd8-be29-80dc0303db72&order[relevance]=desc


  createParmas(){
    for(const param in this.paramsSearch){
      console.log(`${param} : ${this.paramsSearch[param]}`)
    }
  }


  filterSearch(): Observable<any[]> {
    let params = this.createParmas()
    console.log(params)
    return this.httpClient.get<any[]>(`https://api.mangadex.org/manga`)
  }
  
}
