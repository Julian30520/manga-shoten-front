import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchManga= new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  searchBar(evt: any) {
    // console.log(evt.target.value)
    this.searchManga.emit(evt.target.value);
    // console.log(this.searchManga);
  }

}
