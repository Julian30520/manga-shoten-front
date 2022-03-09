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
  bibli: any[];
  manga!: Manga; 

  constructor(private mangaService: MangaService, private tokenService: TokenService) { 
    this.bibli = []
  }

  ngOnInit(): void {

    const userid = this.tokenService.getCurrentUserId();
    this.mangaService.getTomeOfUser(userid).subscribe((tome) => {
      // this.tomes = tome;
      for(let t of tome) {
        this.verify(this.bibli, t)
      }
    })
  }

  public verify(bibli: any, tome:any ) {
    const indexManga = bibli.map((book:any) => book.mangaId).indexOf(tome.manga.mangaId)
    this.manga = new Manga( '','', [],'');
    if(indexManga === -1){
      this.manga.mangaId = tome.manga.mangaId
      this.manga.title = tome.manga.titleEn
      this.manga.tomes.push(tome)
      this.bibli.push(this.manga)
    } else {
      this.bibli[indexManga].tomes.push(tome)
    }
    //console.log('bibli', this.bibli)
  } 

}
