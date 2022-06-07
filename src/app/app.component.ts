import { Component, OnInit, VERSION } from '@angular/core';
import { Book, Movie } from '../types';
import { data } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  items: (Book | Movie)[] = [];

  ngOnInit(): void {
    this.items = data.slice(0, 10) as (Book | Movie)[];
  }
}
