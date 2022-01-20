import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-manga',
  templateUrl: './card-manga.component.html',
  styleUrls: ['./card-manga.component.scss'],
})
export class CardMangaComponent implements OnInit {
  @Input() data: any;

  color = [
    '#0dcaf0',
    '#adb5bd',
    '#000000',
    '#20c997',
    '#198754',
    '#ffc107',
    '#fd7e14',
    '#dc3545',
    '#d63384',
    '#6f42c1',
    '#6610f2',
    '#0d6efd',
  ];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.color);
    // this.getRandomColor();
  }

  getRandomColor() {
    const c = Math.floor(Math.random() * this.color.length);
    // console.log(c);
    return this.color[c];
  }
}
