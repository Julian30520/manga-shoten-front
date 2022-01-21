import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-pages-accueil',
  templateUrl: './pages-accueil.component.html',
  styleUrls: ['./pages-accueil.component.scss'],
})
export class PagesAccueilComponent implements OnInit {
  public dataManga: string[];
  constructor(private mangaService: MangaService, private http: HttpClient) {
    this.dataManga = [];
  }

  ngOnInit(): void {
    this.mangaService.getAllManga().subscribe((data: any[]) => {
      this.dataManga = data;
    });
  }
}
