import { Component, OnInit } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-pages-accueil',
  templateUrl: './pages-accueil.component.html',
  styleUrls: ['./pages-accueil.component.scss'],
})
export class PagesAccueilComponent implements OnInit {
  // dataManga = [
  //   {
  //     name: 'Jujutsu Kaisen',
  //     tome: 12,
  //     url: 'https://m.media-amazon.com/images/I/51+rs1Bi+pL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Kaiju n°8',
  //     tome: 2,
  //     url: 'https://m.media-amazon.com/images/I/51tR629-mqL._SY321_.jpg',
  //   },
  //   {
  //     name: 'One Piece',
  //     tome: 100,
  //     url: 'https://m.media-amazon.com/images/I/51Mt-Xvf4ML._SY321_.jpg',
  //   },
  //   {
  //     name: 'Mashle',
  //     tome: 6,
  //     url: 'https://m.media-amazon.com/images/I/51jDF81GmXL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Blue Lock',
  //     tome: 5,
  //     url: 'https://m.media-amazon.com/images/I/51cMjbxt3GL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Demon Slayer',
  //     tome: 20,
  //     url: 'https://m.media-amazon.com/images/I/51FDU7dMzbL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Dr. Stone',
  //     tome: 18,
  //     url: 'https://m.media-amazon.com/images/I/517wOZR7yLL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Toilet-Bound Hanako-Kun',
  //     tome: 5,
  //     url: 'https://m.media-amazon.com/images/I/61JiNz7YhwL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Fullmetal Alchemist',
  //     tome: 9,
  //     url: 'https://m.media-amazon.com/images/I/51LMHqg5awL._SY321_.jpg',
  //   },
  //   {
  //     name: "Les Carnets de l'Apoticaire",
  //     tome: 7,
  //     url: 'https://m.media-amazon.com/images/I/51MRzwqjyAL._SY321_.jpg',
  //   },
  //   {
  //     name: 'The Quintesstial',
  //     tome: 12,
  //     url: 'https://m.media-amazon.com/images/I/51wTzhUQ7TL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Dr. Stone',
  //     tome: 18,
  //     url: 'https://m.media-amazon.com/images/I/51udvnSZMHL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Yuyu Hakusho',
  //     tome: 1,
  //     url: 'https://m.media-amazon.com/images/I/41JJGyLauIL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Mission - Yozakura Family',
  //     tome: 5,
  //     url: 'https://m.media-amazon.com/images/I/517EGzdxHJL._SY321_.jpg',
  //   },
  //   {
  //     name: 'Darling in the FranXX',
  //     tome: 1,
  //     url: 'https://m.media-amazon.com/images/I/51D8+rLPMPL._SY321_.jpg',
  //   },
  //   {
  //     name: '20th Century Boys',
  //     tome: 10,
  //     url: 'https://m.media-amazon.com/images/I/51LEsw7WUgL._SY321_.jpg',
  //   },
  // ];

  dataManga: any[];
  constructor(private mangaService: MangaService) {
    this.dataManga = [];
  }

  ngOnInit(): void {
    this.mangaService.getAllManga().subscribe((data: any[]) => {
      ///console.log(data)
      this.dataManga = data
      console.log(this.dataManga)
    })
  }
}
