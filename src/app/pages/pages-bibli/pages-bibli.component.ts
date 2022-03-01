import { Component, OnInit } from '@angular/core';
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


  constructor(private mangaService: MangaService, private tokenSerice: TokenService) { }

  ngOnInit(): void {

    const userid = this.tokenSerice.getUser().id;
    this.mangaService.getTomeOfUser(userid).subscribe((tomes) => {
      console.log(tomes)
      this.tomes = tomes;
    })
  }

}
