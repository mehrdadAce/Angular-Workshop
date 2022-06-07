import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../../types';

@Component({
  selector: 'app-book-card',
  templateUrl: './card.component.html',
  // styleUrls: ['./card.component.scss'],
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class CardComponent implements OnInit {

  @Input() book?: Book;
  constructor() { }

  ngOnInit() {
  }

}