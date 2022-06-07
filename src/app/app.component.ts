import { Component, OnInit, VERSION } from '@angular/core';
import { Book, Movie } from '../types';
import { data } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  items: (Book | Movie)[] = [];

  selected?: Book | Movie;

  select(item: Book | Movie) {
      this.selected = item;
  }

  ngOnInit(): void {
    this.items = data.slice(0, 10) as (Book | Movie)[];
  }
}
