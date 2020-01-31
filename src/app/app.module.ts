import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { SearchBoxComponent } from './search-box/search-box.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardlistComponent,
    SearchBoxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
