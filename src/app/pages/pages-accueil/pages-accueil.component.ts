import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-pages-accueil',
  templateUrl: './pages-accueil.component.html',
  styleUrls: ['./pages-accueil.component.scss'],
})
export class PagesAccueilComponent implements OnInit {

  public dataManga: any[];
  public mangaSearch : any[];
  public searchManga: any;

  // Paginations
  page = 1;
  offset = 0;
  limit = 32;
  count = 10000;
  title = '';

  constructor(private mangaService: MangaService, private http: HttpClient) {
    this.dataManga = [];
    this.mangaSearch = []
  }

  ngOnInit(): void {
    this.retrieveMangas();
  }

  getParams( limit: number, offset: number) {
    let params: any = {}
    
    if(limit) {
      params.limit = limit
    }
    if(offset) {
      if (offset == 9984) {
        params.limit = 16
      } 
      params.offset = limit * (this.page - 1)
    }
    return params
  }
  
  retrieveMangas(): void {
    const params = this.getParams(this.limit, this.offset)
    console.log(params)
    this.mangaService.getAllManga(params).subscribe((data: any[]) => {
      ///console.log(data)
      this.dataManga = data;
      this.mangaSearch = [...data]
     // console.log(this.dataManga);
    });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.offset = event * this.limit - this.limit;
   // console.log(this.limit, this.page, this.offset)
    this.retrieveMangas()
  }


  onSearch(search: any) {
    //console.log(search)
    // if(search) {
    //   this.dataManga = this.mangaSearch.filter((el) => {
    //     return el.titleEn.toLowerCase().includes(search.toLowerCase())
    //   })
    // } else {
    //   this.dataManga = this.dataManga
    // }
    // this.searchManga = search;
    if(search) {
      this.mangaService.getMangaBySearch(search).subscribe((el: any) => {
        console.log(el);
        this.dataManga = el
      })
    } else {
      // this.mangaService.getAllManga().subscribe((data: any[]) => {
      //   this.dataManga = data
      //})
      this.retrieveMangas()
    }
  }
}
