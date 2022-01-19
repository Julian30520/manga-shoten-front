import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-details',
  templateUrl: './pages-details.component.html',
  styleUrls: ['./pages-details.component.scss'],
})
export class PagesDetailsComponent implements OnInit {
  detail = {
    title: '20th Century Boys',
    title_jp: '20 Seiki Shōnen',
    bg: 'https://images5.alphacoders.com/376/thumb-1920-376605.png',
    cove_tome:
      'https://uploads.mangadex.org/covers/ad06790a-01e3-400c-a449-0ec152d6756a/28f93458-50f6-4be0-912b-49a584baf2da.jpg.512.jpg',
    author: 'Urasawa Naoki',
    synopsis:
      'Humanity, having faced extinction at the end of the 20th century, would not have entered the new millennium if it weren\'t for them. In 1969, during their youth, they created a symbol. In 1997, as the coming disaster slowly starts to unfold, that symbol returns. This is the story of a group of boys who try to save the world. Won the Kodansha Manga Award in the category "Best General Manga" in 2001.Won the Seiun Award for Best Comic in 2008.',
    genres: ['Action', 'Drama', 'Mystery', 'Psychological', 'Tragedy'],
    type: 'Seinen',
    complete: true,
    tomes: [
      {
        numero: 1,
        url: 'https://picsum.photos/200/300?random=1',
      },
      {
        numero: 2,
        url: 'https://picsum.photos/200/300?random=2',
      },
      {
        numero: 3,
        url: 'https://picsum.photos/200/300?random=3',
      },
      {
        numero: 4,
        url: 'https://picsum.photos/200/300?random=4',
      },
      {
        numero: 5,
        url: 'https://picsum.photos/200/300?random=5',
      },
      {
        numero: 6,
        url: 'https://picsum.photos/200/300?random=6',
      },
      {
        numero: 7,
        url: 'https://picsum.photos/200/300?random=7',
      },
      {
        numero: 8,
        url: 'https://picsum.photos/200/300?random=8',
      },
      {
        numero: 9,
        url: 'https://picsum.photos/200/300?random=9',
      },
      {
        numero: 10,
        url: 'https://picsum.photos/200/300?random=10',
      },
      {
        numero: 11,
        url: 'https://picsum.photos/200/300?random=11',
      },
      {
        numero: 12,
        url: 'https://picsum.photos/200/300?random=12',
      },
      {
        numero: 13,
        url: 'https://picsum.photos/200/300?random=13',
      },
      {
        numero: 14,
        url: 'https://picsum.photos/200/300?random=14',
      },
      {
        numero: 15,
        url: 'https://picsum.photos/200/300?random=15',
      },
      {
        numero: 16,
        url: 'https://picsum.photos/200/300?random=16',
      },
      {
        numero: 17,
        url: 'https://picsum.photos/200/300?random=17',
      },
      {
        numero: 18,
        url: 'https://picsum.photos/200/300?random=18',
      },
      {
        numero: 19,
        url: 'https://picsum.photos/200/300?random=19',
      },
      {
        numero: 20,
        url: 'https://picsum.photos/200/300?random=20',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
