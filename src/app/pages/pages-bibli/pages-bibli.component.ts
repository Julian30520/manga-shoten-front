import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { TokenService } from 'src/app/modules/account/services/token.service';
import { MangaService } from 'src/app/services/manga.service';

const USER_KEY = 'auth-user'
@Component({
  selector: 'app-pages-bibli',
  templateUrl: './pages-bibli.component.html',
  styleUrls: ['./pages-bibli.component.scss']
})
export class PagesBibliComponent implements OnInit {

  tomes: any;
  titleEn: any[];
  bibli: any[];
  manga!: Manga; 

  constructor(private mangaService: MangaService, private tokenService: TokenService) { 
    this.titleEn = [];
    this.bibli = []
  }

  ngOnInit(): void {

    const userid = this.tokenService.getCurrentUserId();
    this.mangaService.getTomeOfUser(userid).subscribe((tome) => {
      this.tomes = tome;
      this.manga = new Manga( '','', []);
      // console.log(tome)
      for(let t of tome) {
        console.log(t)
        this.manga.mangaId = t.manga.mangaId
        this.manga.title = t.manga.titleEn
          if(this.manga.mangaId == t.manga.mangaId ) {
            this.manga.tomes.push(t)
          }
        this.manga
        // console.log(this.manga)
      }
      this.bibli.push(this.manga)
      console.log('bibli', this.bibli)
    })

    
    
  }

}
