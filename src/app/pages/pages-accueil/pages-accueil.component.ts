import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-pages-accueil',
  templateUrl: './pages-accueil.component.html',
  styleUrls: ['./pages-accueil.component.scss'],
})
export class PagesAccueilComponent implements OnInit, OnChanges {
  public dataManga: any[];
  public mangaSearch : any[];
  public searchManga: any;
  constructor(private mangaService: MangaService, private http: HttpClient) {
    this.dataManga = [];
    this.mangaSearch = []

  }

  ngOnInit(): void {
    this.mangaService.getAllManga().subscribe((data: any[]) => {
      ///console.log(data)
      this.dataManga = data;
      this.mangaSearch = [...data]
      console.log(this.dataManga);
    });
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
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
      this.mangaService.getAllManga().subscribe((data: any[]) => {
        this.dataManga = data
      })
    }
  }
}
