import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Movie } from '../../../../types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() movie?: Movie;
  constructor() {}

  ngOnInit() {}
}
