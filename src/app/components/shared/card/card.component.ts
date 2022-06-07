import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Book, Movie } from '../../../../types';

@Component({
  selector: 'app-shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  book?: Book;
  movie?: Movie;

  @Input()
  set item(value: Movie | Book | undefined) {
    this.book = undefined;
    this.movie = undefined;

    if (isBook(value)) {
      this.book = value;
    }
    if (isMovie(value)) {
      this.movie = value;
    }
  }
}

function isBook(item?: Movie | Book): item is Book {
  return item?.type === 'book';
}

function isMovie(item?: Movie | Book): item is Movie {
  return item?.type === 'movie';
}
