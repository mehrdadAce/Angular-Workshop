import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// using alias
import { CardComponent as BookCardComponent } from './components/book/card/card.component';
import { CardComponent as MovieCardComponent } from './components/movie/card/card.component';
import { CardComponent as SharedCardComponent } from './components/shared/card/card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    BookCardComponent,
    MovieCardComponent,
    SharedCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
