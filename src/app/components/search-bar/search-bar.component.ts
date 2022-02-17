import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Params } from 'src/app/models/params';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchManga= new EventEmitter();

  paramsSearch: Params = {
    limit: 0,
    offset: 0,
    title:'',
    includedTags: [],
    contentRating: [],
    publicationDemographic: [],
    status: []
  };

  demographic = ['Shounen', 'Shoujo', 'Seinen', 'Josei', 'None'];
  contentRating = ['Safe', 'Suggestive', 'Erotica', 'Gore', 'Sexual Violence'];
  publicationStatus = ['Ongoing', 'Completed', 'Hiatus', 'Cancelled']
  content = ['Gore', 'Sexual Violence'];
  format = ['4-koma', 'Adaptation','Anthology', 'Award Winning', 'Doujinshi', 'Fan Colored', 'Full Color', 'Long Strip', 'Official Colored', 'Oneshot', 'User Created', 'Web Comic'];
  genre = ['Action', 'Adventure', 'Boys Love', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Girls love', 'Historical', 'Horror', 'Isekai', 'Magical Girls', 'Mecha', 'Medical', 'Mystery', 'Philosophical', 'Psychological', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'SuperHero', 'Thriller', 'Tragedy', 'Wuxia'];
  theme = ['Aliens', 'Action', 'Cooking', 'Crossdressing', 'Delinquents', 'Demons', 'Genderswap','Ghosts','Gyaru', 'Harem', 'Incest', 'Loli', 'Mafia', 'Magic', 'Martial Arts', 'Military', 'Monster Girls', 'Monsters', 'Music', 'Ninja', 'Office Workers', 'Police', 'Post-Apocalyptic', 'Reincarnation', 'Reverse Harem', 'Samurai', 'School Life', 'Shota', 'Supernatural', 'Survival', 'Time Travel', 'Traditional Games', 'Vampires', 'Video Games', 'Vilainess', 'Virtual Reality', 'Zombies'];



  constructor(private mangaService: MangaService) {
  }

  ngOnInit(): void {
    
    //this.pushParams()
   // console.log('param', this.paramsSearch)
    this.modifierParams()
  }

  searchBar(evt: any) {
    // console.log(evt.target.value)
    this.searchManga.emit(evt.target.value);
    // console.log(this.searchManga);
  }

  pushParams() {
    this.paramsSearch.limit = 32;
    this.paramsSearch.includedTags.push('gore')
    this.paramsSearch.includedTags.push('action')
    // console.log(this.paramsSearch)
    return this.paramsSearch
  }

  modifierParams() {
    const params = this.pushParams()
    if(params.includedTags.length > 0) {
       params.includedTags.map((x:string) => {
          console.log(x = `&includedTags=${x}`)
          x = `&includedTags=${x}`
        })
      }
    console.log('modifier', params)
    this.searchFilter(params)
    return params
  }

  searchFilter(params: any) {
    
    console.log(params)
    this.mangaService.filterSearch(params).subscribe((data: any[]) =>{
      console.log(data)
    })
  }

  

}

// Demographic _ publicationDemographic[]
// "shounen" "shoujo" "josei" "seinen" "none"
//Content Rating _ contentRating[]
//"safe" "suggestive" "erotica" "pornographic"
//Publication Status _ status[]
//"ongoing" "completed" "hiatus" "cancelled"