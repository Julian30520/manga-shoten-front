import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesAccueilComponent } from './pages/pages-accueil/pages-accueil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardMangaComponent } from './components/card-manga/card-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesAccueilComponent,
    NavBarComponent,
    SearchBarComponent,
    CardMangaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
