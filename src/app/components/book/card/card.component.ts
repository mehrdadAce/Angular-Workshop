import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './card.component.html',
  // styleUrls: ['./card.component.scss'],
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}