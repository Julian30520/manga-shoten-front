import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchManga= new EventEmitter();

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {
    this.mangaService.filterSearch().subscribe((data: any[]) =>{
      console.log(data)
    })
  }

  searchBar(evt: any) {
    // console.log(evt.target.value)
    this.searchManga.emit(evt.target.value);
    // console.log(this.searchManga);
  }

}

// Demographic _ publicationDemographic[]
// "shounen" "shoujo" "josei" "seinen" "none"
//Content Rating _ contentRating[]
//"safe" "suggestive" "erotica" "pornographic"
//Publication Status _ status[]
//"ongoing" "completed" "hiatus" "cancelled"