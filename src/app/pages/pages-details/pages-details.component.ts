import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/modules/account/services/token.service';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-pages-details',
  templateUrl: './pages-details.component.html',
  styleUrls: ['./pages-details.component.scss'],
})
export class PagesDetailsComponent implements OnInit {
 

  detailManga: any;
  cover;
  showMore: boolean;
  idTomes= [];
  constructor(private mangaService: MangaService, 
              private route: ActivatedRoute,
              private tokenService: TokenService) {
    this.detailManga;
    this.cover = ``;
    this.showMore = false
  }

  ngOnInit(): void {
    /**Params de la route */
    const routeParams = this.route.snapshot.paramMap
    const mangaIdFromRoute= routeParams.get('id');
   // console.log(mangaIdFromRoute)

    this.mangaService.getOneManga(mangaIdFromRoute).subscribe((response) => {
      console.log(response)
      this.detailManga = response
      this.cover = `https://uploads.mangadex.org/covers/${this.detailManga.mangaId}/${this.detailManga.cover}`;
    })
    this.getIdTome()
  }

  public letShowMore () {
    this.showMore = !this.showMore
    console.log(this.showMore)
  }

  public upBibli(tomeNumber: any, mangaId: any) {
    const userid = this.tokenService.getCurrentUserId();
    console.log(tomeNumber, mangaId)
    this.mangaService.postTomeByUser(userid,tomeNumber, mangaId).subscribe(resp => {
      console.log(resp)
    })
  }

  public getAllTomes() {
    const userId = this.tokenService.getCurrentUserId();
    this.mangaService.postAllTome(userId, this.detailManga.mangaId).subscribe(resp => {
      console.log(resp)
    })
  }

  public getIdTome() {
      const userId = this.tokenService.getCurrentUserId();
      this.mangaService.getIdTome(userId).subscribe(resp => {
        this.idTomes = resp
        console.log('id tomes',this.idTomes);
        console.log(this.detailManga.tomes)
        this.idTomes.map(el => {
        })
        
      })
    }
}
