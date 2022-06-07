import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

export { CardComponent as SharedCardComponent } from './card.component'; // to check
export { CardModule as SharedCardModule } from './card.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule {}
