import { Component, OnInit } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-pages-bibli',
  templateUrl: './pages-bibli.component.html',
  styleUrls: ['./pages-bibli.component.scss']
})
export class PagesBibliComponent implements OnInit {



  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangaService.getTomeOfUser(11).subscribe((tomes) => {
      console.log(tomes)
    })
  }

}
